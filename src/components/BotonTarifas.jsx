import { useContext } from "react"
import { TarifaContex } from "@/context/Contextos"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/BotonTarifa.module.css"

export const BotonTarifas = ({ alternarMostrar }) => {

    const { tarifaActual } = useContext(TarifaContex)

    return (
        <>
            <Container className={`rounded-1 ${styles.containerBotonTarifa} overflow-hidden`} fluid>
                <Row onClick={alternarMostrar}>
                    <Col className={`"w-100  p-1 fs-5 text-center `}>
                        <i className={`fa-solid fa-list me-1 my-0 `}></i>
                        <span>
                            Tar.{tarifaActual.tipoDeTarifa}
                        </span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
