import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaPagos.module.css"
import React from "react";
import { useRestanteFinal } from "@/hooks/useRestanteFinal";
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje";
import { usePrecioFinalDeLosProductos } from "@/hooks/usePrecioFinalDeLosProductos"
import { useBuscarMetodosDePago } from "@/hooks//useBuscarMetodosDePago";

const RestoTotal = ({ restosTotales }) => {

    const porcentaje = useCalculadoraPorcenje(restosTotales)

    return (
        <>
            <Row>
                <p className={`${styles.PrecioTotal} `}>
                    $ {restosTotales + porcentaje}
                </p>
            </Row>

        </>
    );

};

const CambioTotal = ({ cambioTotal, restosTotal}) => {


    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { calculoConTarifa } = precioFinal


    const restante = restosTotal < 0 ? 0 : restosTotal

    return (
        <>
            <Row className="border  ">

                <Col>
                    <p>
                        Adeudo Total : {calculoConTarifa}
                    </p>
                    <p>
                      restante : {restante}
                    </p>
                </Col>

                <Col>
                    <p className="fs-5">
                        Cambio  : {cambioTotal}
                    </p>
                </Col>
            </Row>
        </>
    );

};

const SumaTotalDeLosPagos = ({ sumaTotal }) => {

    return (
        <>
            <Row>
                <p className={`${styles.textDeAyuda}`}>Por favor, seleccione un método de pago.</p>
                <p className="bg-danger text-white">
                    Suma Totales: {sumaTotal}
                </p>
            </Row>
        </>
    );
};

export const NumerosTotales = () => {

    const { sumaTotal, restosTotales, cambioTotal } = useRestanteFinal()

    const { metodoEncontrado } = useBuscarMetodosDePago()

    const verificarSiHayPagosActivos = metodoEncontrado ? metodoEncontrado.metodosDePago.length : 0

    return (
        <>
            <Container fluid>
                {
                    verificarSiHayPagosActivos == 0 ?
                        <RestoTotal restosTotales={restosTotales} /> :
                        <CambioTotal restosTotal={restosTotales} cambioTotal={cambioTotal} />
                }
                <SumaTotalDeLosPagos sumaTotal={sumaTotal} />
            </Container>

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

export const SeccionResto = React.memo(() => {


    return (
        <>
            <Col className={`${styles.InteraccionMetodosDePagos}`}>
                <Container fluid className="p-0 d-flex flex-column h-100">
                    <Row className=" text-center p-1">
                        <NumerosTotales />
                    </Row>
                    <Row className={`flex-grow-1 `}>
                        <BotonesDeInteraccion />
                    </Row>
                </Container>
            </Col>
        </>
    );
});