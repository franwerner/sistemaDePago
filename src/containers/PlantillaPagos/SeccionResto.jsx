import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { NumerosTotales } from "./NumerosTotales";
import { ContenedorDeBotonesTactiles } from "@/components//ContenedorDeBotonesTactiles";

export const SeccionResto = () => {

    return (
        <>


            <Container fluid className=" d-flex flex-column  h-100">

                <Row className="  text-center ">
                    <NumerosTotales />
                </Row>

                <Row  className={`scrollHidden mx-1 d-none d-md-flex h-100 flex-grow-1  `}>

                    <Col className="h-25  d-flex justify-content-center p-0 align-items-center h-100">
                        <ContenedorDeBotonesTactiles/>
                    </Col>

                </Row>

            </Container>

        </>
    );
}







