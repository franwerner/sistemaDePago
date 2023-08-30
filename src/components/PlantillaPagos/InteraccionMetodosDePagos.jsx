import { Col, Container, Row } from "react-bootstrap";
import { useListadoFinalProducto } from "../../hooks/useListadoFinalProducto";
import styles from "../../styles/PlantillaPagos.module.css"
import { separarNumerosConDecimales } from "../../helper/separarNumerosConDecimales";
import React from "react";


export const PrecioTotal = () => {
    const { listadoFinal } = useListadoFinalProducto()


    return (
        <>
            <Row>
                <p className={`${styles.PrecioTotal} `}>
                    $ {separarNumerosConDecimales(listadoFinal)}
                </p>
            </Row>
            <Row>
                <p className={`${styles.textDeAyuda}`}>Por favor, seleccione un método de pago.</p>
            </Row>

        </>
    )
}

export const BotonesDeInteraccion = () => {

    return (
        <>
            <Col className={`${styles.botonesDeInteraccion}`}>
                asdadasdasdasdsads
            </Col>
        </>
    )
}

export const InteraccionMetodosDePagos = React.memo(() => {

   
    return (
        <>
            <Col className={`${styles.InteraccionMetodosDePagos}`}>
                <Container  fluid className="p-0 d-flex flex-column h-100">
                    <Row className=" text-center p-5">
                        <PrecioTotal />
                    </Row>
                    <Row className={`flex-grow-1 `}>
                        <BotonesDeInteraccion />
                    </Row>
                </Container>
            </Col>
        </>
    );
});