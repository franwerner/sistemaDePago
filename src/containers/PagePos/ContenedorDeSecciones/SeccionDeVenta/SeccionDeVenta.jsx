import { Row } from "react-bootstrap";
import ContenedorDeSeccionesNav from "./ContenedorDeSeccionesNav";
import ContenedorSeccionVenta from "./ContenedorSeccionVenta";
import { hocTouchYReponsive } from "@/components//HocTouchYReponsive";
import React from "react";

const SeccionDeVenta = ({ containerRef,alternarMostrar,mostrar}) => {
    
    return (
        <>
            <Row
                style={{height : "90px"}}
                className="shadow m-0">
                <ContenedorDeSeccionesNav alternarMostrar={alternarMostrar} />
            </Row>

            <Row
                ref={containerRef}
                className="m-0 overflow-hidden  justify-content-center  p-3 h-100 w-100 shadow ">
                <ContenedorSeccionVenta mostrar={mostrar} />
            </Row>
        </>
    );


};



export default hocTouchYReponsive(SeccionDeVenta)