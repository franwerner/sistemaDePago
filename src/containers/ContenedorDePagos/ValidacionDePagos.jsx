import { BotonValidacionPagos } from "@/components//BotonValidacionPagos"
import { ModalDeDetellaDePago } from "@/components//ModalDetalleDePago"
import { TicketDeVenta } from "@/components//TicketDeVenta"
import { productoReducerContext, restoDelPagoContext } from "@/context//Contextos"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { useRestanteTotal } from "@/hooks//useRestanteTotal"
import { useCallback, useContext, useState } from "react"
import { Col } from "react-bootstrap"
import { GeneracionDeAlertas } from "../GeneracionDeAlertas"

export const ValidacionDePagos = ({ cerrarTodo }) => {

    const { listaProducto, restablecerProductos } = useContext(productoReducerContext)

    const { pagoActual, restablecerPagos } = useContext(restoDelPagoContext)

    const [alternarCodigo, setAlternarCodigo] = useState(0)

    const code = useCallback(() => {
        setAlternarCodigo(0)
    }, [])

    const { metodosDePago } = pagoActual

    const { restoTotal } = useRestanteTotal()

    const { alternarMostrar, mostrar } = useEventoMostrar()

    const onClick = () => {


        if (restoTotal > 0 || listaProducto.length === 0) return setAlternarCodigo(2)

        alternarMostrar()

    }

    const restablecerTodo = () => {

        window.print()
        restablecerProductos()
        alternarMostrar()
        restablecerPagos()
        cerrarTodo()
        console.clear()

    }

    const detalle = restoTotal == 0 && listaProducto.length > 0 ? true : false

    console.log(alternarCodigo)

    return (
        <>
        
                <GeneracionDeAlertas code={code} codigo={alternarCodigo} />

            {
                mostrar && <TicketDeVenta />
            }



            {
                detalle && <ModalDeDetellaDePago
                    restablecerTodo={restablecerTodo}
                    alternarMostrar={alternarMostrar}
                    mostrar={mostrar}
                    metodosDePago={metodosDePago}
                />
            }

            <Col className="d-flex justify-content-center justify-content-md-end p-3">

                <BotonValidacionPagos
                    background={detalle}
                    functionClick={onClick} />

            </Col>
        </>
    )
}