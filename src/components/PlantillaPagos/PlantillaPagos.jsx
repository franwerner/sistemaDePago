import { Col, Container, Row } from "react-bootstrap"
import styles from "../../styles/PlantillaPagos.module.css"
import { useEventoMostrar } from "../../hooks/useEventoMostrar"
import { ContenedorDePagos } from "./ContenedorDePagos"
import React from "react"
import { RestoDelPagoProvider } from "../../context/provider/RestoDelPagoProvider"
import { PlantillaPagosHeader } from "./PlantillaPagosHeader"
import { PlantillaPagosBody } from "./PlantillaPagosBody"

export const PlantillaPagos = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <>
<<<<<<< HEAD
            <Container  fluid className={`d-flex h-100 flex-column ${styles.contenedorPlantillaPagos} `}>
                <Row>
                    <Col className="px-3">
                        <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>
=======
            <Container fluid className="flex-grow-1  ">
                <Row className="h-100 ">
                    <Col  className={`d-flex h-100 p-3 flex-column  ${styles.contenedorPlantillaPagos} `}>
>>>>>>> werner

                        <PlantillaPagosHeader />
                        <PlantillaPagosBody alternarMostrar={alternarMostrar} />

                        <RestoDelPagoProvider>
                            {
                                mostrar &&
                                <ContenedorDePagos mostrar={mostrar} alternarMostrar={alternarMostrar} />
                            }

                        </RestoDelPagoProvider>

                    </Col>
                </Row>
            </Container>
        </>
    )
}