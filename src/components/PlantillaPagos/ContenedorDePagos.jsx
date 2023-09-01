import { NavegacionHeader } from "../NavegacionHeader"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import { MetodosDePago } from "./MetodosDePago"
import styles from "../../styles/PlantillaPagos.module.css"
import { InteraccionMetodosDePagos } from "./InteraccionMetodosDePagos"
import React from "react"
import { RestoDelPagoProvider } from "../../context/provider/RestoDelPagoProvider"



const ModalBody = ({ alternarMostrar, mostrar }) => {

    return (
        <Modal.Body className="flex-grow-1">

            <Container fluid className=" h-100 d-flex flex-column  w-75 ">

                <Row className={`text-center ${styles.navegacionPagos}`}>
                    <Col className="d-flex p-0">
                        <Button onClick={alternarMostrar}>
                            Volver
                        </Button>
                    </Col>
                    <Col className="">
                        <p className={`my-1 fs-3 ${styles.textPagos}`}>
                            Pagos
                        </p>
                    </Col>
                    <Col className="d-flex justify-content-end p-0">
                        <Button >
                            Validar
                        </Button>
                    </Col>
                </Row>

                <Row className={`${styles.lineaPunteada}  h-100`}>

                    <RestoDelPagoProvider>
                        {
                            mostrar &&
                            <>
                                <MetodosDePago />
                                <InteraccionMetodosDePagos />
                            </>

                        }

                    </RestoDelPagoProvider>

                </Row>
            </Container>

        </Modal.Body>
    )
}

export const ContenedorDePagos = ({ mostrar, alternarMostrar }) => {

    const display = mostrar ? "block" : "none"


    return (

        <>
            <Container fluid
                tabIndex={1}
                id="modal-pagos"
                className="modal p-0 show"
                style={{ display }}
            >
                <Modal.Dialog fullscreen={true}>

                    <Modal.Header className="p-0 flex-grow-0 d-block" >

                        <Modal.Title>

                            <NavegacionHeader mostrar={mostrar} />

                        </Modal.Title>

                    </Modal.Header>

                    <ModalBody
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar} />

                </Modal.Dialog>

            </Container>
        </>


    )

}
