import { Col, Container, Row } from "react-bootstrap"
import React, { } from "react"
import styles from "@/styles/ContenedorDePagos.module.css"
import { ValidacionDePagos } from "./ValidacionDePagos"
import { ContenedorDePagoBody } from "./ContenedorDePagoBody"

const ContenedorDePagoHeader = React.memo(({ alternarMostrar }) => {

    return (
        <section id="navegacion-pagos"
            className={` ${styles.navegacionPagos} overflow-hidden px-1 `}>

            <Row className="text-center">

                <Col className="d-flex p-0  justify-content-start">
                    <div
                        className={`${styles.botonVolver} fs-5 text-white fw-bolder py-4 py-md-0 my-md-2 px-3  mx-md-5 d-flex align-items-center justify-content-center flex-grow-1 flex-md-grow-0  `}

                        onClick={alternarMostrar}>
                        <i className="fa-solid me-1 fa-angles-left"></i>
                        <span>
                            Volver
                        </span>
                    </div>
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




const ContenedorDePagos = ({ alternarMostrar }) => {

    return (
        <section
            id="interface-pagos"
            className='h-100 p-0 overflow-hidden'>

            <Col
                className={`${styles.contendorPagosPrincipal} h-100  py-md-3`}>

                <Container
                    fluid
                    className={`${styles.contenedorPagos} h-100 d-flex p-0  position-relative flex-column  `}>

                    <Col
                        xs={{ order: "2" }}
                        md={{ order: "0" }}
                        className="flex-grow-0">
                        <ContenedorDePagoHeader alternarMostrar={alternarMostrar} />
                    </Col>

                    <Col className="flex-grow-1 overflow-hidden h-100">
                        <ContenedorDePagoBody />
                    </Col>

                </Container>

            </Col>

        </section>

    )

}

export default ContenedorDePagos