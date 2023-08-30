import styles from "../../styles/PlantillaProductos.module.css"
import { Col, Container } from "react-bootstrap"
import React from "react"

const SeccionesBotones = ({ seccionActual, secciones, elegirSeccion }) => {

    const variante = secciones == seccionActual ? "BotonSeccionPresionado" : "BotonesSeccion"

    const btnSeccion = <span
        onClick={() => { elegirSeccion(secciones) }}
        className={` p-3 ${styles[variante]}   `}>
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

export const SeccionesProductos = ({seccion,elegirSeccion,seccionesProductos}) => {

    //ACA REALIZAR UNA LLAMADA A LA BASE DE DATOS EN BASE A LA SECCION PROPORCIONADA O EN BASE AL BUSCADOR INPUT

    const onClick = (nombre) => {
        elegirSeccion(nombre)
    }


    return (
        <>
            <Container fluid className={`d-flex flex-grow-0 ${styles.botonesContainer} p-0`}>
                <Col className="d-flex">
                    <span onClick={() => onClick("Home")}
                        className={`fs-4 px-4 text-center d-flex align-items-center justify-content-center text-uppercase ${styles.BotonHome}`}>
                        <i className="fa-solid mx-3 fa-house text-white"></i>
                    </span>
                    {seccionesProductos.map(secProductos =>
                        <SeccionesBotones key={secProductos.nombre}
                            elegirSeccion={onClick}
                            secciones={secProductos.nombre}
                            seccionActual={seccion}
                        />
                    )}
                </Col>
            </Container>
        </>
    )
}

