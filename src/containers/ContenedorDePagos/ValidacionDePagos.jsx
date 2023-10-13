import { ModalDeDetellaDePago } from "@/components//ModalDetalleDePago"
import { TicketDeVenta } from "@/components//TicketDeVenta"
import { productoReducerContext, restoDelPagoContext } from "@/context//Contextos"
import { buscarCodigoDeMensajes } from "@/helper//buscarCodigoDeMensajes"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { useRestanteTotal } from "@/hooks//useRestanteTotal"
import { useContext, } from "react"
import { Col } from "react-bootstrap"
import styles from "@/styles/ContenedorDePagos.module.css"

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

    const onClick = () => {

        if (restoTotal > 0 || listaProducto.length === 0 || metodosDePago.length == 0) return buscarCodigoDeMensajes({ codigo: "2F" })

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

    const isValidated = restoTotal == 0 && listaProducto.length > 0 && metodosDePago.length > 0 ? true : false

    return (

        <Col className="d-flex p-0 m-0 justify-content-end ">

            {mostrar && <TicketDeVenta />}

            {
                isValidated && <ModalDeDetellaDePago
                    restablecerTodo={restablecerTodo}
                    alternarMostrar={alternarMostrar}
                    mostrar={mostrar}
                    metodosDePago={metodosDePago}
                />
            }

            <DetalleButton
                onClick={onClick}
                isValidated={isValidated} />
        </Col>
    )
}

