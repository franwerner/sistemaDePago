import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"


export const PlantillaPagosBody = React.memo(({alternarMostrar}) => {
    return (
        <>
            <Row className={`m-1  flex-grow-1  ${styles.subContenedor}`}>
                <Col className={`text-center align-items-center justify-content-center d-flex  border-secondary border-2 ${styles.botonPagos}`}>
                    <div id="plantilla-pagos" tabIndex={0} onClick={alternarMostrar} className="my-5">
                        <i className="fa-solid fa-circle-arrow-right "></i>
                        <p className="fw-bolder">Pagos</p>
                    </div>
                </Col>
            </Row>

        </>
    );
});