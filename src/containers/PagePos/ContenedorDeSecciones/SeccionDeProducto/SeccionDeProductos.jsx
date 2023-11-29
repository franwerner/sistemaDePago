
import { Row } from "react-bootstrap";
import styles from "@/styles/seccionDeProductos.module.css"
import React from "react";
import SeccionDeProductoBody from "./SeccionDeProductoBody";
import SeccionDeProductosNav from "./SeccionDeProductosNav";

const SeccionDeProductos = () => {

    return (
        <>
            <Row className="w-100 p-0 pb-1 p-md-3 shadow border-bottom m-0 p-0">
                <SeccionDeProductosNav />
            </Row>

            <Row
                className={`${styles.contedorDeProductos} flex-grow-1  scrollBarPersonalizada  h-100 p-0 m-auto`}>
                <SeccionDeProductoBody />

            </Row>
        </>
    );
};


export default SeccionDeProductos