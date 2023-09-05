import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaPagos.module.css"
import React from "react";
import { useBuscarMetodosDePago } from "@/hooks//useBuscarMetodosDePago";
import { usePrecioFinalDeLosProductos } from "@/hooks/usePrecioFinalDeLosProductos";
import { useCambioTotal } from "@/hooks//useCambioTotal";
import { useRestanteTotal } from "@/hooks//useRestanteTotal";

const RestoTotal = ({ restosTotales }) => {

    return (
        <>
            <Row>
                <p className={`${styles.PrecioTotal} `}>
                    $ {restosTotales}
                </p>
            </Row>

        </>
    );

};

const CambioTotal = ({ cambioTotal, restosTotal }) => {


    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { calculoConTarifa } = precioFinal

    return (
        <>
            <Row className="border  ">

                <Col>
                    <p>
                        Adeudo total : {calculoConTarifa}
                    </p>
                    <p>
                        restante : {restosTotal}
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


export const NumerosTotales = () => {

    const { metodoEncontrado } = useBuscarMetodosDePago()
    const { cambioTotal } = useCambioTotal()
    const { restosTotales } = useRestanteTotal()

    const verificarSiHayPagosActivos = metodoEncontrado ? metodoEncontrado.metodosDePago.length : 0

    return (
        <>
            <Container fluid>
                {
                    verificarSiHayPagosActivos == 0 ?
                        <RestoTotal restosTotales={restosTotales} /> :
                        <CambioTotal restosTotal={restosTotales} cambioTotal={cambioTotal} />
                }
            </Container>

        </>
    )
}

export const BotonesDeInteraccion = () => {

    return (
        <>
            <Col className={`${styles.botonesDeInteraccion}`}>
                {/* asdadasdasdasdsads */}
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