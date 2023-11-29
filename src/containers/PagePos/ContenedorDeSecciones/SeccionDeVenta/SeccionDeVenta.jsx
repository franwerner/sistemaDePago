import { Row } from "react-bootstrap";
import SeccionDeVentaNav from "./SeccionDeVentaNav";
import SeccionDeVentaBody from "./SeccionDeVentaBody";
import { hocTouchYReponsive } from "@/components//HocTouchYReponsive";
import React from "react";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";

const SeccionDeVenta = ({ containerRef, alternarMostrar, mostrar }) => {

    return (
        <QueryParamsProvider>
            <Row

                className="shadow p-2 w-100 d-flex justify-content-between m-0">
                <SeccionDeVentaNav alternarMostrar={alternarMostrar} />
            </Row>

            <Row
                ref={containerRef}
                className="m-0 overflow-hidden  justify-content-center   p-3 h-100 w-100 shadow ">
                <SeccionDeVentaBody mostrar={mostrar} />
            </Row>
        </QueryParamsProvider>
    );


};



export default hocTouchYReponsive(SeccionDeVenta)