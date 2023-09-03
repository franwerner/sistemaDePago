import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaPagos.module.css"
import React from "react";
import { useRestanteFinal } from "@/hooks/useRestanteFinal";
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje";
import { useBuscarMetodosDePago } from "@/hooks/useBuscarMetodosDePago"
import { usePrecioFinalDeLosProductos } from "@/hooks/usePrecioFinalDeLosProductos"

const ValorSinAgregar = ({ restosTotales }) => {
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

const RestanteTotal = ({ restosTotales }) => {

    const { precioFinal } = usePrecioFinalDeLosProductos()
    const { calculoConTarifa } = precioFinal

    return (
        <>
            {/* <Row>
                <p>
                    Restantes : {restosTotales}
                </p>
                <p>
                    Adeudo total : {calculoConTarifa}
                </p>
            </Row> */}
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

export const PrecioTotal = () => {

    const { sumaTotal, restosTotales } = useRestanteFinal()

    const { metodoEncontrado } = useBuscarMetodosDePago()

    const largo = metodoEncontrado ? metodoEncontrado.metodosDePago : -1

    return (
        <>
            <Container>
                <RestanteTotal restosTotales={restosTotales} />
                <ValorSinAgregar restosTotales={restosTotales} />
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