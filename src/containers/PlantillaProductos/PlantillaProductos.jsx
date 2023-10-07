
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaProductos.module.css"
import { ContainerDeProductos } from "./ContainerDeProductos";
import { useSeccion } from "@/hooks/useSeccion";
import { SeccionesProductos } from "./SeccionesProductos";
import React from "react";
import { BotonesContendorPrincipal } from "@/components//BotonesContendorPrincipal";

export const PlantillaProductos = React.memo(({ mostrar }) => {

    const { seccion, elegirSeccion, seccionesProductos } = useSeccion()

    const onHide = mostrar ? "d-flex" : "d-none"

    return (
        <Col className={` d-flex flex-column h-100 p-0 scrollHidden overflow-hidden ${styles.PlantillaProductos}`}>

            <Container fluid className="p-0 d-flex scrollHidden h-100   flex-column">

                <SeccionesProductos
                    seccion={seccion}
                    elegirSeccion={elegirSeccion}
                    seccionesProductos={seccionesProductos} />



                <ContainerDeProductos seccion={seccion} />


                <Row>
                    <Col className="d-flex">
                        <BotonesContendorPrincipal />
                    </Col>
                </Row>

            </Container>
        </Col>

    );

});