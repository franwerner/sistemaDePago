
import { useCambioTotal } from "@/hooks//useCambioTotal"
import { useRestanteTotal } from "@/hooks//useRestanteTotal"
import React, { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaPagos.module.css"
import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales";
import { usePrecioFinalDeLosProductos } from "@/hooks//usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context//Contextos";



const RestoTotal = ({ restosTotales }) => {

    return (
        <>
            <Row className={`align-items-center h-100`}>

                <Col>
                    <p className={`${styles.restoTotal}  my-2 overflow-hidden`}>
                        $ {separarNumerosConDecimales(restosTotales)}
                    </p>

                    <p className={styles.textoDeAyuda} >
                        Por favor, seleccione un método de pago.
                    </p>
                </Col>

            </Row>

        </>
    );

};



const Totales = ({ cambioTotal, restosTotal }) => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { calculoConTarifa } = precioFinal

    return (
        <>
            <Row>
                <Col className={`${styles.cambioTotalContainer} my-3 fs-4 d-flex justify-content-between`}>
                    <div className="d-flex text-start overflow-hidden align-items-center ">

                        <p className={`${styles.restantes} me-1 `}>
                            Restantes
                        </p>

                        <p className={`${styles.restoNumero} `}>
                            $ {separarNumerosConDecimales(restosTotal)}
                        </p>

                    </div>

                    <div className={` d-flex ${styles.cambio} overflow-hidden `}>
                        <p className="me-1 text-start">
                            Cambio
                        </p>
                        <p className={styles.cambioNumero} >
                            $ {separarNumerosConDecimales(cambioTotal)}
                        </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <p className={`${styles.adeudoTotal} text-start  my-4 `}>
                    Adeudo total  $ {separarNumerosConDecimales(calculoConTarifa)}
                </p>
            </Row>
        </>
    );

};


export const NumerosTotales = React.memo(() => {

    const { cambioTotal } = useCambioTotal()

    const { restosTotales } = useRestanteTotal()

    const { pagoActual } = useContext(restoDelPagoContext)

    const { metodosDePago } = pagoActual

    return (
        <>
            <Container className={`${styles.numerosTotales}`} fluid>
                {
                    metodosDePago.length == 0 ?
                        <RestoTotal restosTotales={restosTotales} /> :
                        <Totales restosTotal={restosTotales} cambioTotal={cambioTotal} />
                } 
            </Container>

        </>
    )
})