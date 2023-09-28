import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { NumerosTotales } from "./NumerosTotales";
import { ContenedorDeBotonesTactiles } from "@/components//ContenedorDeBotonesTactiles";
import { restoDelPagoContext } from "@/context/Contextos"
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import styles from "@/styles/PlantillaPagos.module.css"
import { IconCalculator } from "@/components//IconCalculator";

const SeccionRezise = ({ mostrar, alternarMostrar }) => {

    const { modificarResto, pagoActual } = useContext(restoDelPagoContext)

    const analizarWindow = window.innerWidth < 768 ? true : false

    const [widthWindow, setWidthWindow] = useState(analizarWindow)

    const { ultimoSeleccionado = { resto: 0 } } = pagoActual

    useEffect(() => {

        const resizeWindow = (e) => {

            if (e.currentTarget.innerWidth >= 768 && widthWindow) setWidthWindow(!widthWindow)

            else if (e.currentTarget.innerWidth < 768 && !widthWindow) setWidthWindow(!widthWindow)

            if (e.currentTarget.innerWidth >= 768 && mostrar) alternarMostrar()
        }

        window.addEventListener("resize", resizeWindow)
        return () => window.removeEventListener("resize", resizeWindow)

    }, [mostrar, widthWindow])

    return (
        <>

            {
                mostrar ?
                    <span
                        className={`${styles.botonesTactilesResize} position-absolute  d-flex justify-content-center  d-md-none`}>
                        <div className={`${styles.contendorDeBotonesTactiles}`}>
                            <ContenedorDeBotonesTactiles
                                modificadorDefault={modificarResto}
                                numeroDefault={ultimoSeleccionado.resto} />
                        </div>
                    </span>
                    :
                    <span className="d-none d-md-block">
                        <ContenedorDeBotonesTactiles
                            modificadorDefault={modificarResto}
                            numeroDefault={ultimoSeleccionado.resto} />

                    </span>
            }


            {
                widthWindow &&
                <span
                    style={{ left: "0%"}}
                    className="mt-5 position-absolute mx-3 ">
                    <IconCalculator
                        mostrar={mostrar}
                        alternarMostrar={alternarMostrar} />
                </span>
            }

        </>
    )
}

export const SeccionResto = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>
            <Container fluid className=" d-flex flex-column  h-100">

                <Row className="  text-center ">
                    <NumerosTotales />
                </Row>

                <Row className={`scrollHidden mx-1 h-100  flex-grow-1  `}>

                    <Col className="h-25 d-flex justify-content-center p-0 align-items-center h-100">
                        <SeccionRezise
                            mostrar={mostrar}
                            alternarMostrar={alternarMostrar} />
                    </Col>
                </Row>

            </Container>

        </>
    );
}







