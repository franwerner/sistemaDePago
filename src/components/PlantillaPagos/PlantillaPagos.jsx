import { Col, Container, Row } from "react-bootstrap"
import { ListaDeTarifas } from "../ListaDeTarifas"
import styles from "../../styles/PlantillaPagos.module.css"
import { useEventoMostrar } from "../../hooks/useEventoMostrar"
import { ContenedorDePagos } from "./ContenedorDePagos"
import React from "react"


export const PlantillaPagos = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <>
            <Container fluid className={`d-flex h-100 flex-column ${styles.contenedorPlantillaPagos} `}>
                <Row>
                    <Col className="px-3">
                        <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>

                <Row className={`m-1  flex-grow-1  ${styles.subContenedor}`}>

                    <Col className={`text-center align-items-center justify-content-center d-flex  border-secondary border-2 ${styles.botonPagos}`}>
                        <div onClick={alternarMostrar} className="my-5">
                            <i className="fa-solid fa-circle-arrow-right "></i>
                            <p className="fw-bolder">Pagos</p>
                        </div>
                    </Col>
                    
                    <ContenedorDePagos mostrar={mostrar} alternarMostrar={alternarMostrar}/>
                    

               
                </Row>
            </Container>
        </>
    )
}