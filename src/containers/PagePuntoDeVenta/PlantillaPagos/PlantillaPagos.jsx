import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/PlantillaPagos.module.css"
import React from "react"
import { PlantillaPagosBody } from "./PlantillaPagosBody"
import PlantillaPagosHeader from "./PlantillaPagosHeader"

export const PlantillaPagos = React.memo(({ alternarMostrarContenedor, alternarMostrar }) => {


    return (
            <Container fluid className={`flex-grow-0  ${styles.contenedorPlantillaPagos}`}>
                <Row className="h-100">

                    <Col className="d-flex  p-0 h-100 flex-column">

                        <PlantillaPagosHeader />
                        <PlantillaPagosBody
                            alternarMostrar={alternarMostrar}
                            alternarMostrarContenedor={alternarMostrarContenedor} />

                    </Col>
                </Row>
            </Container>
    )
})

