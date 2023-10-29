
import { Row } from "react-bootstrap";
import styles from "@/styles/seccionDeProductos.module.css"
import React from "react";

import ContainerDeProductos from "./ContainerDeProductos";
import ContenedorDeProductosNav from "./ContenedorDeProductosNav";

const SeccionDeProductos = () => {

    return (
        <>
            <Row className={`${styles.containerDeSecciones} w-100   shadow m-0 p-0    `}>
                <ContenedorDeProductosNav />
            </Row>

            <Row className={`${styles.ContainerDeProductos} flex-grow-1  scrollBarPersonalizada  h-100 p-0 m-0`}>
                <ContainerDeProductos />
            </Row>
        </>
    );
};


export default SeccionDeProductos