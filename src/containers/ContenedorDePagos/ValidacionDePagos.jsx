import { BotonValidacionPagos } from "@/components//BotonValidacionPagos"
import { ModalDeDetellaDePago } from "@/components//ModalDetalleDePago"
import { TicketDeVenta } from "@/components//TicketDeVenta"
import { productoReducerContext, restoDelPagoContext } from "@/context//Contextos"
import { buscarCodigoDeMensajes } from "@/helper//buscarCodigoDeMensajes"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { useRestanteTotal } from "@/hooks//useRestanteTotal"
import { useContext, } from "react"
import { Col } from "react-bootstrap"

export const ValidacionDePagos = ({ cerrarTodo }) => {

    const { listaProducto, restablecerProductos } = useContext(productoReducerContext)

    const { pagoActual, restablecerPagos } = useContext(restoDelPagoContext)

    const { metodosDePago } = pagoActual

    const { restoTotal } = useRestanteTotal()

    const { alternarMostrar, mostrar } = useEventoMostrar()

    const onClick = () => {

        if (restoTotal > 0 || listaProducto.length === 0) return buscarCodigoDeMensajes({ codigo: "2F" })

        alternarMostrar()

    }

    const restablecerTodo = () => {


        window.print()
        // restablecerProductos()
        // alternarMostrar()
        // restablecerPagos()
        // cerrarTodo()
        buscarCodigoDeMensajes({ codigo: "3F" })

    }

    const detalle = restoTotal == 0 && listaProducto.length > 0 ? true : false

    return (
        <>

<TicketDeVenta />
            {/* {
                mostrar && <TicketDeVenta />
            } */}



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