import React, { useContext, } from "react";
import { ContenedorDeBotonesTactiles } from "@/components//ContenedorDeBotonesTactiles";
import { restoDelPagoContext } from "@/context/Contextos"
import { Col } from "react-bootstrap";

export const BotonTacil = () => {

    const { modificarResto, pagoActual } = useContext(restoDelPagoContext)

    const { ultimoSeleccionado = { resto: 0 } } = pagoActual

    return (
        <Col className=" d-flex align-items-center justify-content-center h-100">
            <span className="d-none d-md-block">
                <ContenedorDeBotonesTactiles
                    modificadorDefault={modificarResto}
                    numeroDefault={ultimoSeleccionado.resto} />

            </span>
        </Col>
    )
}









