import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import { separarNumerosConDecimales } from "../../helper/separarNumerosConDecimales";
import React from "react";
import { useRestanteFinal } from "../../hooks/useRestanteFinal";
import { usePrecioFinalDeLosProductos } from "../../hooks/usePrecioFinalDeLosProductos";
import { useCalculadoraPorcenje } from "../../hooks/useCalcularPorcentaje";



export const PrecioTotal = () => {

    const { restaFinal } = useRestanteFinal()

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { calculoConTarifa } = precioFinal

    const { calculoSuma, calculoResta } = restaFinal

    

    const restaCalculada = calculoSuma == 0 ? calculoConTarifa : calculoSuma


    const porcentaje = useCalculadoraPorcenje(calculoResta)


    return (
        <>
            <Row>
                <p className={`${styles.PrecioTotal} `}>
                    $ {separarNumerosConDecimales(calculoResta + porcentaje)}
                </p>
            </Row>
            <Row>
                <p className={`${styles.textDeAyuda}`}>Por favor, seleccione un método de pago.</p>
                {porcentaje + calculoResta}
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