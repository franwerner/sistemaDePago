import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales"
import { Col, Row, Stack } from "react-bootstrap"
import styles from "@/styles/SeccionDeCaja.module.css"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { lazy } from "react"

const InterfaceDeRetiroYIngresoEfectivo = lazy(() => import("@/components//InterfaceDeRetiroYIngresoEfectivo"))

const opcionesBoton = {
    retirar: { nombre: "Retirar", icon: "fa-arrow-turn-down" },
    ingresar: { nombre: "Ingresar", icon: "fa-arrow-turn-up" }
}

const BotonEfectivo = ({ tipo }) => {
    const { alternarMostrar, mostrar } = useEventoMostrar();

    return (
        <>
            <div
                onClick={alternarMostrar}
                className="border zoom d-flex shadow align-items-center justify-content-between p-3">
                <p className="m-0 fw-medium">{opcionesBoton[tipo].nombre} Efectivo</p>
                <i className={`fa-solid fs-4 ${opcionesBoton[tipo].icon}`}></i>
            </div>
            {mostrar && <InterfaceDeRetiroYIngresoEfectivo
                alternarMostrar={alternarMostrar}
                mostrar={mostrar}
                tipo={tipo} />}
        </>
    );
}

export const SeccionDeCajaContenedorFooter = () => {

    return (
        <Row className="h-100  m-0">

            <Col xs="auto">
                <Stack
                    gap={5}
                    direction="horizontal"
                    className={`${styles.seccionCajaFooter} align-items-center h-100  fw-medium`} >

                    <div className="fw-semibold  text-dark">
                        <p>+Transacciones</p>
                        <p>=Saldo Total de cierre</p>
                        <p className="my-0">Diferencia</p>
                    </div>
                    <div className="border-start fw-medium mx-1 px-3 ">
                        <p>$ {separarNumerosConDecimales(123213)}</p>
                        <p>$ {separarNumerosConDecimales(12323)}</p>
                        <p className="my-0">$ {separarNumerosConDecimales(0)}</p>
                    </div>
                </Stack>
            </Col>

            <Col className="d-flex justify-content-center ">
                <Stack
                    gap={2}
                    className={`${styles.botonesDeEfectivo} h-100 justify-content-center align-items-lg-end`}>

                    <BotonEfectivo tipo="retirar" />
                    <BotonEfectivo tipo="ingresar" />

                </Stack>
            </Col>

        </Row>
    )
}