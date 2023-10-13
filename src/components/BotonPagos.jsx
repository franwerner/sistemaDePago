import React from "react";
import { Col } from "react-bootstrap";
import { PrecioFinalMemoizado } from "../hooks/usePrecioFinalDeLosProductos";



export const BotonPagos = React.memo(({ alternarMostrarContenedor }) => {



    return (
        <Col
            style={{ background: "#D3D3D3", fontSize: "18px", cursor: "pointer"}}
            className=" text-white p-3 text-center  fw-bolder"
            onClick={alternarMostrarContenedor}>

            <p className="m-0  ">
                Pagos
            </p>
            <p style={{ fontSize: "15px" }} className="m-0 text-truncate ">
                $ <PrecioFinalMemoizado/>
            </p>

        </Col>
    );

});