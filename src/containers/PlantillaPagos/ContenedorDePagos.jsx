import { NavegacionHeader } from "@/Components/NavegacionHeader"
import { Col, Container, Modal, Row } from "react-bootstrap"
import React, { useContext } from "react"
import styles from "@/styles/PlantillaPagos.module.css"
import { SeccionResto } from "./SeccionResto"
import { BotonValidacionPagos } from "@/components//BotonValidacionPagos"
import { BotonVolver } from "@/components//BotonVolver"
import { AlternarMetodosDePagos } from "./alternarMetodosDePagos"
import { ModalDeDetellaDePago } from "@/components//ModalDetalleDePago"
import { productoReducerContext, restoDelPagoContext } from "@/context//Contextos"
import { useRestanteTotal } from "@/hooks//useRestanteTotal"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { ModalDeMensajesPersonalizados } from "@/components//ModalDeMensajesPersonalizados"



const ValidacionDePagos = ({ cerrarTodo }) => {

    const { listaProducto, restablecerProductos } = useContext(productoReducerContext)

    const { pagoActual, restablecerPagos } = useContext(restoDelPagoContext)

    const { metodosDePago } = pagoActual

    const { restoTotal } = useRestanteTotal()

    const { alternarMostrar, mostrar } = useEventoMostrar()

    const onClick = () => {

        try {
            if (restoTotal > 0 || listaProducto.length === 0) return

            alternarMostrar()

        } catch (error) {

        }


    }

    const restablecerTodo = () => {

        restablecerProductos()
        alternarMostrar()
        restablecerPagos()
        cerrarTodo()

    }

    const background = restoTotal == 0 && listaProducto.length > 0 ? true : false

    return (
        <>
            <ModalDeMensajesPersonalizados>

            </ModalDeMensajesPersonalizados>

            {
                background && <ModalDeDetellaDePago
                    restablecerTodo={restablecerTodo}
                    alternarMostrar={alternarMostrar}
                    mostrar={mostrar}
                    metodosDePago={metodosDePago}
                />
            }

            <Col className="d-flex justify-content-center justify-content-md-end p-3">

                <BotonValidacionPagos
                    background={background}
                    functionClick={onClick} />

            </Col>
        </>
    )
}

const ContenedorDePagoHeader = React.memo(({ alternarMostrar }) => {

    return (
        <Row className={`text-center flex-grow-0   ${styles.navegacionPagos}`}>

            <Col className="d-flex p-3 justify-content-center justify-content-md-start">

                <BotonVolver alternarMostrar={alternarMostrar} />
            </Col>

            <Col className="align-items-center d-none d-sm-flex  justify-content-center">
                <p className={`my-2  fs-3 ${styles.textPagos}`}>
                    Pagos
                </p>
            </Col>

            <ValidacionDePagos cerrarTodo={alternarMostrar} />

        </Row>

    )
})



const ContenedorDePagoBody = ({ mostrar }) => {

    return (

        <Row

            className={`${styles.lineaPunteada} flex-grow-1 p-0  scrollBarPersonalizada flex-column flex-md-row h-100`}>


            {
                mostrar &&
                <>

                    <Col
                        className={` scrollHidden pt-0 pb-3  h-100 ${styles.contendorMetodosDePagoAgregados}  `}
                        xs={{ order: "2" }}
                        md={{ order: "0" }}>
                        <AlternarMetodosDePagos />
                    </Col>


                    <Col
                        md={7}
                        className={` p-0 ${styles.seccionResto}`}>
                        <SeccionResto />
                    </Col>

                </>
            }


        </Row>

    )

}




export const ContenedorDePagos = ({ mostrar, alternarMostrar }) => {

    return (

        <>
            <Modal
                tabIndex={1}
                id="modal-pagos"
                className="p-0 vh-100"
                show={mostrar}
                fullscreen={true}
            >

                <Modal.Header className="p-0 d-block" >

                    <Modal.Title>

                        <NavegacionHeader mostrar={mostrar} />

                    </Modal.Title>

                </Modal.Header>

                <Modal.Body className={`${styles.bodyPlantillaPagos} p-0 py-3 `}>


                    <Container
                        fluid
                        className={`${styles.contenedorPlantillaPagos} h-100 d-flex overflow-hidden  position-relative flex-column  `}>

                        <ContenedorDePagoHeader alternarMostrar={alternarMostrar} />

                        <ContenedorDePagoBody mostrar={mostrar} />

                    </Container>

                </Modal.Body>

            </Modal >
        </>


    )

}
