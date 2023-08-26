
import { PlantillaProductos } from "./PlantillaProductos"
import { useSeccion } from "../hooks/useSeccion"
import styles from "../styles/SeccionesProductos.module.css"
import { Col, Container, Row } from "react-bootstrap"
import React, { } from "react"



export const SeccionesBotones = ({ seccionActual, secciones, elegirSeccion }) => {

    const variante = secciones == seccionActual ? "BotonSeccionPresionado" : "BotonesSeccion"

    const btnSeccion = <Col
        onClick={() => { elegirSeccion(secciones) }}
        className={` p-3 ${styles[variante]}   `}>
        {secciones}
    </Col>

    return (
        <>
            {
                seccionActual == "Home" ? btnSeccion : secciones == seccionActual ? btnSeccion : ""
            }

        </>
    )
}

//ACA REALIZAR UNA LLAMADA A LA BASE DE DATOS DE LA SECCIONES

export const SeccionesProductos = () => {


    const { seccion, elegirSeccion, seccionesProductos } = useSeccion()
  //ACA REALIZAR UNA LLAMADA A LA BASE DE DATOS EN BASE A LA SECCION PROPORCIONADA O EN BASE AL BUSCADOR INPUT
    

    const onClick = (nombre) => {
        elegirSeccion(nombre)
    }


    return (
        <>
            <Col className={`p-0 ${styles.seccionesPrincipal}`}>
                <Container fluid className={`d-flex  ${styles.botonesContainer} p-0`}>
                    <Row>
                        <Col onClick={() => onClick("Home")}
                            className={`fs-4 px-4 text-center d-flex align-items-center justify-content-center text-uppercase ${styles.BotonHome}`}>
                            <i className="fa-solid mx-3 fa-house text-white"></i>
                        </Col>
                        {seccionesProductos.map(secProductos =>
                            <SeccionesBotones key={secProductos.nombre}
                                elegirSeccion={onClick}
                                secciones={secProductos.nombre}
                                seccionActual={seccion}

                            />
                        )}

                    </Row>
                </Container>

                <Container className={`flex-wrap position-relative  my-2  d-flex justify-content-md-start justify-content-center `}>
                    <PlantillaProductos seccion={seccion} />
                </Container>
                
            </Col>
        </>
    )
}

