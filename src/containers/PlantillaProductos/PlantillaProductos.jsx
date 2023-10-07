
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaProductos.module.css"
import { ContainerDeProductos } from "./ContainerDeProductos";
import { useSeccion } from "@/hooks/useSeccion";
import { SeccionesProductos } from "./SeccionesProductos";
import React from "react";
import { BotonesContendorPrincipal } from "@/components//BotonesContendorPrincipal";

export const PlantillaProductos = React.memo(({ alternarMostrar, alternarMostrarContenedor }) => {

    const { seccion, elegirSeccion, seccionesProductos } = useSeccion()

    return (
        <section className="h-100 overflow-hidden w-100" id={"seccion-productos"}>

            <Col className={`${styles.contendorPlantillaProductos} h-100  d-flex flex-column `}>

                <Container fluid className="p-0  d-flex scrollXHidden h-100 flex-column">

                    <SeccionesProductos
                        seccion={seccion}
                        elegirSeccion={elegirSeccion}
                        seccionesProductos={seccionesProductos} />

                    <ContainerDeProductos seccion={seccion} />


                    <Row className="d-md-none  align-items-end position-relative flex-grow-1 " >
                        <Col className="d-flex ">
                            <BotonesContendorPrincipal
                                mostrar={true}
                                alternarMostrarContenedor={alternarMostrarContenedor}
                                alternarMostrar={alternarMostrar} />
                        </Col>
                    </Row>

                </Container>
            </Col>

        </section>
    );

});