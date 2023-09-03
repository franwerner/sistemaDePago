
import React from "react"
import { Col, Row,Button} from "react-bootstrap"
import styles from "@/styles/PlantillaPagos.module.css"

export const ContenedorDePagoHeader = React.memo(({ alternarMostrar }) => {
    return (
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

    )
})

