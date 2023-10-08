import React from "react";
import {Col } from "react-bootstrap";
import { usePrecioFinalDeLosProductos } from "../hooks/usePrecioFinalDeLosProductos";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";



export const BotonPagos = React.memo(({ alternarMostrarContenedor }) => {


    const Total = () => {

        const { precioFinal } = usePrecioFinalDeLosProductos()

        const { calculoConTarifa } = precioFinal

        return (
            separarNumerosConDecimales(calculoConTarifa)
        )
    }

    return (
        <Col
            style={{ background: "#D3D3D3", fontSize: "18px",cursor : "pointer"}}
            className="w-100 scrollHidden text-white text-center p-3 fw-bolder"
            onClick={alternarMostrarContenedor}>

            <p className="m-0">
                Pagos
            </p>
            <p style={{ fontSize: "15px" }} className="m-0 ">
                $ <Total />
            </p>

        </Col>
    );

});