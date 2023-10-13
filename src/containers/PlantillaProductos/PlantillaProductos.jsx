
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaProductos.module.css"
import { ContainerDeProductos } from "./ContainerDeProductos";
import { useSeccion } from "@/hooks/useSeccion";
import { SeccionesProductos } from "./SeccionesProductos";
import React from "react";
import { BotonPagos } from "@/components//BotonPagos";
import { BotonProductoYRevision } from "@/components//BotonProductoYRevision";

export const PlantillaProductos = React.memo(({ alternarMostrar, alternarMostrarContenedor }) => {

    const { seccion, elegirSeccion, seccionesProductos } = useSeccion()

    return (
        <section className=" h-100 w-100 overflow-hidden" id={"seccion-productos"}>

            <Col className={`${styles.contendorPlantillaProductos} h-100   d-flex flex-column `}>

                <Container fluid className="p-0  d-flex h-100 flex-column">

                    <SeccionesProductos
                        seccion={seccion}
                        elegirSeccion={elegirSeccion}
                        seccionesProductos={seccionesProductos} />

                    <ContainerDeProductos seccion={seccion} />


                    <Row className=" border m-0 flex-grow-0 d-md-none align-items-end d-flex  " >
                        <BotonPagos alternarMostrarContenedor={alternarMostrarContenedor} />
                        <BotonProductoYRevision
                            alternarMostrar={alternarMostrar}
                            mostrar={true} />
                    </Row>

                </Container>
            </Col>

        </section>
    );

});