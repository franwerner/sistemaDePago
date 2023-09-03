import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import React from "react";
import { useRestanteFinal } from "../../hooks/useRestanteFinal";
import { useCalculadoraPorcenje } from "../../hooks/useCalcularPorcentaje";
import { buscarMetodosDePago } from "../../helper/buscarMetodosDePago";


const RestoParaUtilizar = ({ restosTotales }) => {

    const porcentaje = useCalculadoraPorcenje(restosTotales)

    return (
        <>
            <Row>
                <p className={`${styles.PrecioTotal} `}>
                    $ {restosTotales + porcentaje}
                </p>
            </Row>
            <Row>
                <p className={`${styles.textDeAyuda}`}>Por favor, seleccione un método de pago.</p>
            </Row>
        </>
    )
};

const Restantes = () => {
    return (
        <>
            <Row>

            </Row>
        </>
    );
};

export const PrecioTotal = () => {

    const { sumaTotal, restosTotales } = useRestanteFinal()

    const metodoActual = buscarMetodosDePago()

    const largo = metodoActual ? metodoActual.metodosDePago.length : 0

    return (

        <Container fluid>


            {
                largo == 0 ? <RestoParaUtilizar
                    restosTotales={restosTotales}
                /> :
                    ""
            }
        </Container>


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

export const SeccionRestante = React.memo(() => {


    return (
        <>
            <Col className={`${styles.PagosRestantes}`}>
                <Container fluid className="p-0 d-flex flex-column h-100">
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