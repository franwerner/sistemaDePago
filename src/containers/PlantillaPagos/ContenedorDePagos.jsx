import { NavegacionHeader } from "@/Components/NavegacionHeader"
import { Col, Container, Modal, Row } from "react-bootstrap"
import React from "react"
import styles from "@/styles/PlantillaPagos.module.css"
import { RestoDelPagoProvider } from "@/context//provider/RestoDelPagoProvider"
import { SeccionResto } from "./SeccionResto"
import { BotonValidacionPagos } from "@/components//BotonValidacionPagos"
import { BotonVolver } from "@/components//BotonVolver"
import { AlternarMetodosDePagos } from "./alternarMetodosDePagos"

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

            <Col className="d-flex justify-content-center justify-content-md-end p-3">

                <BotonValidacionPagos />

            </Col>
        </Row>

    )
})



const ContenedorDePagoBody = ({ mostrar }) => {

    return (

        <Row

            className={`${styles.lineaPunteada} flex-grow-1 p-0  scrollBarPersonalizada flex-column flex-md-row h-100`}>

            <RestoDelPagoProvider>

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

            </RestoDelPagoProvider>
        </Row>

    )

}




export const ContenedorDePagos = ({ mostrar, alternarMostrar }) => {

    const display = mostrar ? "block" : "none"

    return (

        <>
            <Container fluid
                tabIndex={1}
                id="modal-pagos"
                className="modal  p-0 show vh-100"
                style={{ display }}
            >
                <Modal.Dialog fullscreen={true}>

                    <Modal.Header className="p-0 d-block" >

                        <Modal.Title>

                            <NavegacionHeader mostrar={mostrar} />

                        </Modal.Title>

                    </Modal.Header>

                    <Modal.Body className={`${styles.bodyPlantillaPagos} p-0 py-3 `}>

                        <Container fluid
                            className={`${styles.contenedorPlantillaPagos} h-100 d-flex overflow-hidden  position-relative flex-column  `}>

                            <ContenedorDePagoHeader alternarMostrar={alternarMostrar} />

                            <ContenedorDePagoBody mostrar={mostrar} />


                        </Container>

                    </Modal.Body>

                </Modal.Dialog>

            </Container>
        </>


    )

}
