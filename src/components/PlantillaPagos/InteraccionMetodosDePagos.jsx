import { Col, Container, Row } from "react-bootstrap";
import { useListadoFinalProducto } from "../../hooks/useListadoFinalProducto";
import styles from "../../styles/PlantillaPagos.module.css"
import { separarNumerosConDecimales } from "../../helper/separarNumerosConDecimales";


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
            <Col>
                asdadasdasdasdsads
            </Col>
        </>
    )
}

export const InteraccionMetodosDePagos = () => {

    return (
        <>
            <Col className="border border-danger">
                <Container fluid className="d-flex flex-column h-100">
                    <Row className="border text-center p-5">
                        <PrecioTotal />
                    </Row>
                    <Row className="border flex-grow-1">
                        <BotonesDeInteraccion />
                    </Row>
                </Container>
            </Col>
        </>
    );
};