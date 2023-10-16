
import { Col, Container } from "react-bootstrap";
import styles from "@/styles/PlantillaProductos.module.css"
import { ContainerDeProductos } from "./ContainerDeProductos";
import { useSeccion } from "@/hooks/useSeccion";
import { SeccionesProductos } from "./SeccionesProductos";
import React, {} from "react";

export const PlantillaProductos = React.memo(({}) => {

    const { seccion, elegirSeccion, seccionesProductos } = useSeccion()

    return (

            <Col className={`${styles.contendorPlantillaProductos} h-100 w-100 overflow-hidden p-0  d-flex flex-column `}>

                <Container fluid className="p-0  d-flex h-100 flex-column">

                    <SeccionesProductos
                        seccion={seccion}
                        elegirSeccion={elegirSeccion}
                        seccionesProductos={seccionesProductos} />

                    <ContainerDeProductos seccion={seccion} />

                </Container>
            </Col>
    );

});