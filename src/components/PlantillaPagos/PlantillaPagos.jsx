import { Col, Container, Row } from "react-bootstrap"
import styles from "../../styles/PlantillaPagos.module.css"
import { useEventoMostrar } from "../../hooks/useEventoMostrar"
import { ContenedorDePagos } from "./ContenedorDePagos"
import React, { useCallback } from "react"
import { PlantillaPagosHeader } from "./PlantillaPagosHeader"
import { PlantillaPagosBody } from "./PlantillaPagosBody"
import { useEvitarRenderizados } from "../../hooks/useEvitarRenderizados"


export const PlantillaPagos = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { conteoRenderizados, registrarConteo } = useEvitarRenderizados()

    const onClick = useCallback(() => {
        alternarMostrar()
        registrarConteo()
    },[])

    return (
        <>
            <Container fluid className="flex-grow-1  ">
                <Row className="h-100 ">
                    <Col className={`d-flex h-100  flex-column  ${styles.contenedorPlantillaPagos} `}>

                        <PlantillaPagosHeader />
                        <PlantillaPagosBody
                            alternarMostrar={onClick} />

                        {
                            conteoRenderizados >= 1 &&
                            <ContenedorDePagos
                                mostrar={mostrar}
                                alternarMostrar={alternarMostrar} />
                        }



                    </Col>
                </Row>
            </Container>

        </>
    )
}