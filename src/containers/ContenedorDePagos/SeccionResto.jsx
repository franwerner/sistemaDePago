import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, } from "react";
import { NumerosTotales } from "./NumerosTotales";
import { ContenedorDeBotonesTactiles } from "@/components//ContenedorDeBotonesTactiles";
import { restoDelPagoContext } from "@/context/Contextos"

const AlternarBotonesTactiales = () => {

    const { modificarResto, pagoActual } = useContext(restoDelPagoContext)

    const { ultimoSeleccionado = { resto: 0 } } = pagoActual

    return (

        <span className="d-none d-md-block">
            <ContenedorDeBotonesTactiles
                modificadorDefault={modificarResto}
                numeroDefault={ultimoSeleccionado.resto} />

        </span>

    )
}

export const SeccionResto = () => {


    return (
        <section
            id="seccion-resto"
            className="h-100">

            <Container fluid className=" d-flex flex-column  h-100">

                <Row className="text-center">
                    <NumerosTotales />
                </Row>


                <Row className={`scrollHidden  mx-auto  flex-grow-1  `}>

                    <Col className=" d-flex align-items-center ">
                        <AlternarBotonesTactiales />
                    </Col>

                </Row>

            </Container>

        </section>
    );
}







