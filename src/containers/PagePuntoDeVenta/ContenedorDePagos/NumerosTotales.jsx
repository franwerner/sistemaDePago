
import { RestanteTotalMemoizando } from "@/hooks//useRestanteTotal"
import React, { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/ContenedorDePagos.module.css"
import { PrecioFinalMemoizado } from "@/hooks//usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context//Contextos";
import { CambioTotalMemoizado } from "@/hooks//useCalcularCambioTotal";


const RestoTotal = () => {

    return (
        <Row className="align-items-center h-100">

            <Col>
                <p className={`${styles.restoTotal} text-truncate my-2 `}>
                    $ <RestanteTotalMemoizando />
                </p>

                <p className={`${styles.textoDeAyuda} text-wrap`} >
                    Por favor, seleccione un método de pago.
                </p>
            </Col>

        </Row>
    );

};



const Totales = React.memo(() => {

    return (
        <>
            <Row>
                <Col className="flex-wrap  my-3 fs-4 d-flex justify-content-between">

                    <div className="d-flex text-start overflow-hidden  align-items-center ">

                        <p className={`${styles.restantes} me-1 `}>
                            Restantes
                        </p>

                        <p className={`${styles.restoNumero} text-truncate`}>
                            $ <RestanteTotalMemoizando />
                        </p>

                    </div>

                    <div className={` d-flex ${styles.cambio} overflow-hidden `}>
                        <p className="me-1 text-start">
                            Cambio
                        </p>
                        <p className="text-truncate">
                            $ <CambioTotalMemoizado />
                        </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <p className={`${styles.adeudoTotal} text-start  my-4 text-truncate `}>
                    Adeudo total  $ <PrecioFinalMemoizado />
                </p>
            </Row>
        </>
    );

})


export const NumerosTotales = React.memo(() => {

    const { pagoActual } = useContext(restoDelPagoContext)

    const { metodosDePago } = pagoActual

    return (
        <Container className={`${styles.numerosTotales}`} fluid>
            {
                metodosDePago.length == 0 ?
                    <RestoTotal /> :
                    <Totales />
            }
        </Container>

    )
})