import BotonRotacion from "@/components//BotonRotacion";
import BuscadorInput from "@/components//BuscadorInput";
import React from "react";
import { Col } from "react-bootstrap";


const ContenedorDeSeccionesNav = React.memo(({ alternarMostrar }) => {

    return (
        <>
            <Col
                xs="auto"
                className="d-flex d-md-none position-relative align-items-center">
                <BotonRotacion alternarMostrar={alternarMostrar} />
            </Col>


            <Col className="p-0 d-flex mx-3 bg-dangerd-flex justify-content-center align-items-center">
                <BuscadorInput texto={"productos"} />
            </Col>
        </>
    )
})

export default ContenedorDeSeccionesNav