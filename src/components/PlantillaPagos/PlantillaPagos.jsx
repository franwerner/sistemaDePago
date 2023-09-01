import { Col, Container, Row } from "react-bootstrap"
import styles from "../../styles/PlantillaPagos.module.css"
import { useEventoMostrar } from "../../hooks/useEventoMostrar"
import { ContenedorDePagos } from "./ContenedorDePagos"
import React from "react"
import { PlantillaPagosHeader } from "./PlantillaPagosHeader"
import { PlantillaPagosBody } from "./PlantillaPagosBody"

export const PlantillaPagos = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

   

    return (
        <>
            <Container fluid className="flex-grow-1  ">
                <Row className="h-100 ">
                    <Col className={`d-flex h-100  flex-column  ${styles.contenedorPlantillaPagos} `}>

                        <PlantillaPagosHeader />
                        <PlantillaPagosBody
                            alternarMostrar={alternarMostrar} />

                        <ContenedorDePagos
                            mostrar={mostrar}
                            alternarMostrar={alternarMostrar} />

                    </Col>
                </Row>
            </Container>

        </>
    )
}