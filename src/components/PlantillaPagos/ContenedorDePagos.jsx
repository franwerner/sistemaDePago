import { NavegacionHeader } from "../NavegacionHeader"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import { MetodosDePago } from "./MetodosDePago"
import styles from "../../styles/PlantillaPagos.module.css"
import { InteraccionMetodosDePagos } from "./InteraccionMetodosDePagos"

export const ContenedorDePagos = ({ mostrar, alternarMostrar }) => {





    return (


        <Modal  style={{maxHeight : "100vh"}} animation={false} className="d-flex flex-column" show={mostrar} fullscreen={true} >

            <Modal.Header className="p-0 flex-grow-0 d-block"  >
                <Modal.Title  >
                    <NavegacionHeader mostrar={mostrar}></NavegacionHeader>
                </Modal.Title>

            </Modal.Header>
            <Modal.Body  className="flex-grow-1">
                <Container fluid className=" h-100 d-flex flex-column  w-75 ">
                    <Row className={`text-center ${styles.navegacionPagos}`}>
                        <Col className="d-flex p-0">
                            <Button onClick={alternarMostrar}>
                                Volver
                            </Button>
                        </Col>
                        <Col  className="">
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

                         <MetodosDePago/>
                         <InteraccionMetodosDePagos/>
                         
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>

    )

}