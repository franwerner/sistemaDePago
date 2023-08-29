import { NavegacionHeader } from "../NavegacionHeader"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import { useListadoFinalProducto } from "../../hooks/useListadoFinalProducto"


const MetodoDePago = () => {

    return (
        <Col className={`$"{styles.metodoDePago}"`}>

        </Col>
    )
}

export const ContenedorDePagos = ({ mostrar, alternarMostrar }) => {



    const { listadoFinal } = useListadoFinalProducto()

    return (


        <Modal animation={false} className="" show={false} fullscreen={true} >

            <Modal.Header className="p-0 d-block"  >


                <Modal.Title>
                    <NavegacionHeader mostrar={mostrar}></NavegacionHeader>
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Container fluid className="border w-75 h-100 p-0 border-danger">
                    <Row className="text-center">
                        <Col className="d-flex">
                            <Button onClick={alternarMostrar}>
                                Volver
                            </Button>
                        </Col>
                        <Col className="text-center ">
                            <p className="my-1">
                                Pagos
                            </p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button >
                                Validar
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        {/* <p>
                      {listadoFinal}
                      </p> */}
                        <MetodoDePago></MetodoDePago>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>

    )

}