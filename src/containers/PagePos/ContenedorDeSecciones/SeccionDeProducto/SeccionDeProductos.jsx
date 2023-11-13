
import { Row } from "react-bootstrap";
import styles from "@/styles/seccionDeProductos.module.css"
import React, { useRef } from "react";
import ContainerDeProductos from "./ContainerDeProductos";
import ContenedorDeProductosNav from "./ContenedorDeProductosNav";

const SeccionDeProductos = () => {

    const containerRef = useRef(null)

    return (
        <>
            <Row className={`${styles.contenedorDeProductosNav} w-100 shadow m-0 p-0`}>
                <ContenedorDeProductosNav />
            </Row>

            <Row
                ref={containerRef}
                className={`${styles.contedorDeProductos} flex-grow-1  scrollBarPersonalizada  h-100 p-0 m-auto`}>
                <ContainerDeProductos containerRef={containerRef} />
                
            </Row>
        </>
    );
};


export default SeccionDeProductos