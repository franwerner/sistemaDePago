import styles from "@/styles/PlantillaProductos.module.css"
import { Col, Container, Row } from "react-bootstrap"
import React from "react"

const SeccionesRestantes = ({ seccionActual, secciones, elegirSeccion }) => {

    const btnSeccion = <span
        onClick={() => { elegirSeccion(secciones) }}
        className={` ${styles.botonesSeccion}   `}>
        {secciones}
    </span>

    return (
        <>
            {
                seccionActual == "Home" ? btnSeccion : secciones == seccionActual ? btnSeccion : ""
            }

        </>
    )
}

const SeccionHome = ({ seccion, onClick }) => {

    const arrowImg = seccion !== "Home" ? <img className={`${styles.arrowHome}`} src="../../../assets/bc-arrow-big.png"></img> : ""

    return (
        <>
            <div

                onClick={() => onClick("Home")}
                className={`px-4 position-relative d-flex ${styles.botonesSeccion}`}>

                {arrowImg}

                <span
                    className={`fs-4 text-center d-flex align-items-center justify-content-center`}>
                    <i className="fa-solid  fa-house "></i>
                </span>
            </div>

        </>
    )
}

export const SeccionesProductos = ({ seccion, elegirSeccion, seccionesProductos }) => {

    //ACA REALIZAR UNA LLAMADA A LA BASE DE DATOS EN BASE A LA SECCION PROPORCIONADA O EN BASE AL BUSCADOR INPUT

    const onClick = (nombre) => {
        elegirSeccion(nombre)
    }

    return (
        <>

            <Container fluid className={`d-flex flex-grow-0  ${styles.seccionesContainer} p-0`}>
                <Row>
                    <Col className="d-flex">

                        <SeccionHome seccion={seccion} onClick={onClick} />

                        {seccionesProductos.map(secProductos =>
                            <SeccionesRestantes key={secProductos.nombre}
                                elegirSeccion={onClick}
                                secciones={secProductos.nombre}
                                seccionActual={seccion}
                            />
                        )}
                    </Col>
                </Row>

            </Container>
        </>
    )
}

