import SeccionDeVentaNav from "./SeccionDeVentaNav";
import SeccionDeVentaBody from "./SeccionDeVentaBody";
import { hocTouchYReponsive } from "@/components//HOC/HocTouchYReponsive";
import React from "react";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";

const SeccionDeVenta = ({ containerRef, alternarMostrar, mostrar }) => {

    return (
        <QueryParamsProvider>

            <SeccionNavDefault>
                <SeccionDeVentaNav alternarMostrar={alternarMostrar} />
            </SeccionNavDefault>

            <SeccionBodyDefault
                clasesAdd="justify-content-center  p-3"
                referido={containerRef}>
                <SeccionDeVentaBody mostrar={mostrar} />
            </SeccionBodyDefault>


        </QueryParamsProvider >
    );


};



export default hocTouchYReponsive(SeccionDeVenta)