import { Button, Col, Row, Stack } from "react-bootstrap"
import styles from "@/styles/SeccionDeCaja.module.css"
import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { lazy } from "react"
import { retrasoTest } from "@/common//helper/retrasoTest"
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading"

const InterfaceDeRetiroYIngresoEfectivo = lazy(() => retrasoTest(import("./InterfaceDeRetiroYIngresoEfectivo")))

const opcionesBoton = [
    { nombre: "Retirar", icon: "fa-arrow-turn-down" },
    { nombre: "Ingresar", icon: "fa-arrow-turn-up" }
]

const BotonEfectivo = ({ nombre, icon }) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <div className="my-3 w-100 d-flex justify-content-center ">
            <SuspenseCompontentsLoading>
                {
                    mostrar &&
                    <InterfaceDeRetiroYIngresoEfectivo
                        tipo={nombre.toLowerCase()}
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar} />
                }
            </SuspenseCompontentsLoading>

            <Button
                onClick={alternarMostrar}
                variant="outline-primary-2  mx-1 ls-3 border-2 w-75 fs-5 p-2">
                {nombre}
                <i className={`fa-solid fs-4 ${icon}`} />
            </Button>
        </div>
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
                            <p >Apertura</p>
                            <p className="my-0">Estado</p>
                        </div>
                        <div className="border-start  mx-1 px-3 ">
                            <p className="text-primary-2" >Franco Werner </p>
                            <p className="text-primary-2">Provincias unidas 1992</p>
                            <p className="text-dark fw-light">3/11/2023 17:01:56</p>
                            <p className="my-0 text-success">Abierto</p>
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
                <Col xs="12" md="8">
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

                <Col xs className="d-flex align-items-center flex-column justify-content-center">
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