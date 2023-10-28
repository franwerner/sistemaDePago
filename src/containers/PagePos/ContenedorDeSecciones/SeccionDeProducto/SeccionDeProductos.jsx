
import { Row } from "react-bootstrap";
import styles from "@/styles/seccionDeProductos.module.css"
import React from "react";
import ContainerDeSecciones from "./ContainerDeSecciones";
import ContainerDeProductos from "./ContainerDeProductos";

const SeccionDeProductos = () => {

    return (
        <>
            <Row className={`${styles.containerDeSecciones} w-100 overflow-hidden  shadow m-0 p-0    `}>
                <ContainerDeSecciones />
            </Row>

            <Row className={`${styles.ContainerDeProductos} flex-grow-1  scrollBarPersonalizada  h-100 p-0 m-0`}>
                <ContainerDeProductos />
            </Row>
        </>
    );
};


export default SeccionDeProductos