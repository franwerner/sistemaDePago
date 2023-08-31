import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
export const PlantillaPagosBody = React.memo(({alternarMostrar}) => {
    return (
        <>
            <Container fluid className={`  flex-grow-1 border  `}>

                <Row className={`text-center h-100 align-items-center justify-content-center d-flex   ${styles.botonPagos}`}>
                    <Col id="plantilla-pagos" tabIndex={0} onClick={alternarMostrar} >
                        <i className="fa-solid fa-circle-arrow-right "></i>
                        <p className="fw-bolder">Pagos</p>
                    </Col>
                </Row>
            </Container>

        </>
    );
});