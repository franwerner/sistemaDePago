import { useContext } from "react"
import { TarifaContex } from "../context/Contextos"
import { Col, Container, Row } from "react-bootstrap"



export const BotonTarifas = ({ alternarMostrar }) => {

    const { tarifaActual } = useContext(TarifaContex)

    return (
        <>
            <Container className="c" fluid>
                <Row onClick={alternarMostrar}>
                    <Col className="d-flex justify-content-center align-items-center">
                        <i className={`fa-solid fa-list me-1 fs-5`}></i>
                        <span className="fs-5 "  >
                            Tar.{tarifaActual.tipoDePago}
                        </span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
