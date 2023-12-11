import { Button, Col, Row, Stack } from "react-bootstrap"
import styles from "@/styles/SeccionDeCaja.module.css"
import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales"
import InterfaceDeRetiroYIngresoEfectivo from "./InterfaceDeRetiroYIngresoEfectivo"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"

const opcionesBoton = [
    { nombre: "Retirar", icon: "fa-arrow-turn-down" },
    { nombre: "Ingresar", icon: "fa-arrow-turn-up" }
]

const BotonEfectivo = ({ nombre, icon }) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>
            <Button
                onClick={alternarMostrar}
                variant="outline-primary">
                {nombre}
                <i className={`fa-solid ${icon}`} />
            </Button>
            <InterfaceDeRetiroYIngresoEfectivo tipo={nombre.toLowerCase()} alternarMostrar={alternarMostrar} mostrar={mostrar} />
        </>
    )
}

export const SeccionDeCajaBody = () => {

    return (
        <Col className="h-100 d-flex flex-column  scrollBarPersonalizada  shadow  ">
            <Row className="flex-grow-1 m-0 ">

                <Col className="p-0 p-md-2">
                    <Stack
                        gap={5}
                        direction="horizontal"
                        className="align-items-center h-100 fw-medium" >

                        <div className="text-dark">
                            <p>Abierto por</p>
                            <p>Punto de venta</p>
                            <p className="my-0">Apertura</p>
                        </div>
                        <div className="border-start  mx-1 px-3 ">
                            <p className="text-primary-2" >Franco Werner </p>
                            <p className="text-primary-2">Provincias unidas 1992</p>
                            <p className="my-0 text-dark fw-light">3/11/2023 17:01:56</p>
                        </div>

                    </Stack>

                </Col>
            </Row>

            <Row className="m-0 flex-grow-0">
                <div className="border-bottom p-0 ">
                    <p className={`${styles.borderControlEfectivo} bg-white p-2 m-0 border border-bottom-0 fw-medium `}>Control de efectivo</p>
                </div>
            </Row>

            <Row className="m-0 flex-grow-1">
                <Col xs="auto">
                    <Stack
                        gap={5}
                        direction="horizontal"
                        className=" align-items-center h-100  fw-medium" >

                        <div className="fw-semibold  text-dark">
                            <p>+Transacciones</p>
                            <p>=Saldo Total de cierre</p>
                            <p className="my-0">Diferencia</p>
                        </div>
                        <div className="border-start text-ligthdark fw-medium mx-1 px-3 ">
                            <p>$ {separarNumerosConDecimales(123213)}</p>
                            <p>$ {separarNumerosConDecimales(12323)}</p>
                            <p className="my-0">$ {separarNumerosConDecimales(0)}</p>
                        </div>
                    </Stack>
                </Col>

                <Col>
                    {
                        opcionesBoton.map(item =>
                            <BotonEfectivo key={item.nombre} {...item} />
                        )
                    }
                </Col>

            </Row>

        </Col>
    )
}