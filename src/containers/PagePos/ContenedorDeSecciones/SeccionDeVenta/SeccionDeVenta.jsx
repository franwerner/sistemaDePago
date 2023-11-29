import { Row } from "react-bootstrap";
import SeccionDeVentaNav from "./SeccionDeVentaNav";
import SeccionDeVentaBody from "./SeccionDeVentaBody";
import { hocTouchYReponsive } from "@/components//HocTouchYReponsive";
import React from "react";

const SeccionDeVenta = ({ containerRef,alternarMostrar,mostrar}) => {
    
    return (
        <>
            <Row
                style={{height : "90px"}}
                className="shadow m-0">
                <SeccionDeVentaNav alternarMostrar={alternarMostrar} />
            </Row>

            <Row
                ref={containerRef}
                className="m-0 overflow-hidden  justify-content-center  p-3 h-100 w-100 shadow ">
                <SeccionDeVentaBody mostrar={mostrar} />
            </Row>
        </>
    );


};



export default hocTouchYReponsive(SeccionDeVenta)