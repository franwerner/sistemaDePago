import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { NumerosTotales } from "./NumerosTotales";
import { ContenedorDeBotonesTactiles } from "@/components//ContenedorDeBotonesTactiles";
import { restoDelPagoContext } from "@/context/Contextos"


export const SeccionResto = () => {

    const { modificarResto, pagoActual } = useContext(restoDelPagoContext)

    const { ultimoSeleccionado = { resto: 0 } } = pagoActual

    
    return (
        <>
            <Container fluid className=" d-flex flex-column  h-100">

                <Row className="  text-center ">
                    <NumerosTotales />
                </Row>

                <Row className={`scrollHidden mx-1 d-none d-md-flex h-100 flex-grow-1  `}>

                    <Col className="h-25  d-flex justify-content-center p-0 align-items-center h-100">
                        <ContenedorDeBotonesTactiles modificadorDefault={modificarResto} numeroDefault={ultimoSeleccionado.resto} />
                    </Col>

                </Row>

            </Container>

        </>
    );
}







