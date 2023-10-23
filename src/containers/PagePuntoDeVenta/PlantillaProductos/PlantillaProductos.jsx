
import { Col, Container } from "react-bootstrap";
import styles from "@/styles/PlantillaProductos.module.css"
import { ContainerDeProductos } from "./ContainerDeProductos";
import { useSeccion } from "@/hooks/useSeccion";
import React, { lazy } from "react";
import { SuspenseLoading } from "@/components//SuspenseLoading";

const SeccionesProductos = lazy(() => import("./SeccionesProductos"))

export const PlantillaProductos = React.memo(({ }) => {

    const { seccion, elegirSeccion, seccionesProductos } = useSeccion()

    return (

        <Col className={`${styles.contendorPlantillaProductos} h-100 w-100 overflow-hidden p-0  d-flex flex-column `}>

            <Container fluid className="p-0  d-flex h-100 flex-column">

                <SuspenseLoading>
                    <SeccionesProductos
                        seccion={seccion}
                        elegirSeccion={elegirSeccion}
                        seccionesProductos={seccionesProductos} />
                </SuspenseLoading>

                <ContainerDeProductos seccion={seccion} />

            </Container>
        </Col>
    );

});