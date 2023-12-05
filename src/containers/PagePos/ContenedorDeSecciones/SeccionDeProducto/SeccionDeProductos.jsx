import { Row } from "react-bootstrap";
import React from "react";
import SeccionDeProductoBody from "./SeccionDeProductoBody";
import SeccionDeProductosNav from "./SeccionDeProductosNav";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";

const SeccionDeProductos = () => {

    return (
        <>
            <SeccionNavDefault >
                <SeccionDeProductosNav />
            </SeccionNavDefault >

            <SeccionBodyDefault>
                <SeccionDeProductoBody />
            </SeccionBodyDefault>
        </>
    );
};


export default SeccionDeProductos
