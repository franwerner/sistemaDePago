
import { PlantillaProductos } from "./PlantillaProductos"
import { useSeccion } from "../hooks/useSeccion"
import styles from "../styles/SeccionesProductos.module.css"
import { Col, Container } from "react-bootstrap"
import React, { useEffect, useState } from "react"

const ContainerDeProductos = ({ seccion }) => {

    const [maxHeight, setMaxHeight] = useState(850);

    const [click, setClick] = useState(false)

    useEffect(() => {

        const navbarHeight = document.querySelector('.navbar-toggler')

        const onClick = (e) => {

            if (!click) {
                setMaxHeight(maxHeight - 94);
            }
            else {
                setMaxHeight(850)
            }

            setClick(prevClick => !prevClick);
        }
        navbarHeight.addEventListener("click", onClick)

        return () => navbarHeight.removeEventListener("click", onClick)

    }, [click]);

    return (
        <>
            <Container style={{ maxHeight: `${maxHeight}px` }} className={` ${styles.contenedorProductos}  `}>
                <Col className="flex-wrap my-2  flex d-flex justify-content-center justify-content-md-start" >
                    <PlantillaProductos seccion={seccion} />
                </Col>
            </Container>
        </>
    )
}


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


export const SeccionesProductos = () => {


    const { seccion, elegirSeccion, seccionesProductos } = useSeccion()
    //ACA REALIZAR UNA LLAMADA A LA BASE DE DATOS EN BASE A LA SECCION PROPORCIONADA O EN BASE AL BUSCADOR INPUT


    const onClick = (nombre) => {
        elegirSeccion(nombre)
    }

    return (
        <>
            <Col className={`p-0   ${styles.seccionesPrincipal}`}>
                <Container fluid className={`d-flex  ${styles.botonesContainer} p-0`}>
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

                <ContainerDeProductos seccion={seccion} />

            </Col>
        </>
    )
}

