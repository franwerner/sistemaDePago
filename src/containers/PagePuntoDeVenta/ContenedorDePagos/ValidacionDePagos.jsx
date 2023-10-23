import { productoReducerContext, restoDelPagoContext } from "@/context//Contextos"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { useRestanteTotal } from "@/hooks//useRestanteTotal"
import { lazy, useContext, } from "react"
import { Col } from "react-bootstrap"
import styles from "@/styles/ContenedorDePagos.module.css"
import { SuspenseLoading } from "@/components//SuspenseLoading"
import { cargaDiferida } from "@/helper//cargaDiferida"

const TicketDeVenta = lazy(() => import("@/components//TicketDeVenta"))
const ModalDeDetellaDePago = lazy(() => import("@/components//ModalDetalleDePago"))
const buscarCodigoDeMensajes = cargaDiferida(() => import("@/helper//buscarCodigoDeMensajes"))

const DetalleButton = ({ onClick, isValidated }) => {

    const btn = isValidated ? "botonDetalleActivo" : "botonDetalle"

    return (
        <div
            onClick={onClick}
            className={`${styles[btn]} fs-5 text-white fw-bolder mx-1  py-md-0 my-md-2 px-3 d-flex align-items-center justify-content-center  py-4 mx-md-5 flex-grow-1 flex-md-grow-0 `}>
            <span className="me-1">
                Detalle
            </span>
            <i className="fa-solid fa-angles-right"></i>
        </div>
    )
}

export const ValidacionDePagos = ({ cerrarTodo }) => {

    const { listaProducto, restablecerProductos } = useContext(productoReducerContext)

    const { pagoActual, restablecerPagos } = useContext(restoDelPagoContext)

    const { metodosDePago } = pagoActual

    const { restoTotal } = useRestanteTotal()

    const { alternarMostrar, mostrar } = useEventoMostrar()

    const onClick = async () => {

        if (restoTotal > 0 || listaProducto.length === 0 || metodosDePago.length == 0) return buscarCodigoDeMensajes({ codigo: "2F" })

        alternarMostrar()

    }

    const restablecerTodo = async () => {

        window.print()
        await buscarCodigoDeMensajes({ codigo: "3F" })
        restablecerProductos()
        alternarMostrar()
        restablecerPagos()
        cerrarTodo()


    }

    const isValidated = restoTotal == 0 && listaProducto.length > 0 && metodosDePago.length > 0 ? true : false

    return (

        <Col className="d-flex p-0 m-0 justify-content-end ">
            <SuspenseLoading>
                {mostrar &&

                    <TicketDeVenta />

                }

                {
                    isValidated &&
                    <ModalDeDetellaDePago
                        restablecerTodo={restablecerTodo}
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar}
                        metodosDePago={metodosDePago}
                    />

                }

                <DetalleButton
                    onClick={onClick}
                    isValidated={isValidated} />
            </SuspenseLoading>
        </Col>
    )
}

