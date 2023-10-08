import { } from "@/Components/NavegacionHeader"
import { Col, Container, Row } from "react-bootstrap"
import React, { } from "react"
import styles from "@/styles/ContenedorDePagos.module.css"
import { SeccionResto } from "./SeccionResto"
import { BotonVolver } from "@/components//BotonVolver"
import { AlternarMetodosDePagos } from "./alternarMetodosDePagos"
import { RestoDelPagoProvider } from "@/context//provider/RestoDelPagoProvider"
import { ValidacionDePagos } from "./ValidacionDePagos"


const ContenedorDePagoHeader = React.memo(({ alternarMostrar }) => {

    return (
        <section id="navegacion-pagos"
            className={` ${styles.navegacionPagos} overflow-hidden px-1 `}>
            <Row className="text-center"
            >
                <Col className="d-flex p-0  justify-content-start">

                    <BotonVolver alternarMostrar={alternarMostrar} />
                </Col>

                <Col className="align-items-center d-none d-md-flex  justify-content-center">
                    <p className={`my-2 fs-3 ${styles.textPagos}`}>
                        Pagos
                    </p>
                </Col>

                <ValidacionDePagos cerrarTodo={alternarMostrar} />

            </Row>
        </section>
    )
})


const ContenedorDePagoBody = () => {

    return (

        <section id="seccion-pagos-principal"
            className={`h-100  px-2 ${styles.lineaPunteada}  `}>

            <Row
                xs={{ order: "2" }}
                className="px-1 d-flex flex-column flex-md-row  h-100">

                <Col
                    className={` scrollHidden pt-0 pb-3  h-100 ${styles.contendorMetodosDePagoAgregados}  `}
                    xs={{ order: "2" }}
                    md={{ order: "0" }}>
                    <AlternarMetodosDePagos />
                </Col>

                <Col
                    md={7}
                    className={` p-0 ${styles.seccionResto}`}>
                    <SeccionResto />
                </Col>

            </Row>
        </section>
    )

}

export const ContenedorDePagos = ({ mostrar, alternarMostrar }) => {

    return (

        <RestoDelPagoProvider>
            {
                mostrar &&

                <section
                    id="interface-pagos"
                    className='h-100 p-0 overflow-hidden'>

                    <Col
                        className={`${styles.contendorPagosPrincipal} h-100  py-md-3`}>

                        <Container
                            fluid
                            className={`${styles.contenedorPagos} h-100 d-flex p-0  position-relative flex-column  `}>

                            <Col xs={{ order: "2" }} md={{ order: "0" }} className="flex-grow-0">
                                <ContenedorDePagoHeader alternarMostrar={alternarMostrar} />
                            </Col>

                            <Col className="flex-grow-1 overflow-hidden h-100">
                                <ContenedorDePagoBody />
                            </Col>

                        </Container>

                    </Col>

                </section>
            }

        </RestoDelPagoProvider>




    )

}
