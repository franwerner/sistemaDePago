import React from "react";
import { Button } from "react-bootstrap";

export const BotonesContendorPrincipal = React.memo(({ alternarMostrar = () =>{} }) => {

    return (

        <>
            <Button
                variant="none"
                onClick={alternarMostrar}
                style={{ background: "#88DC65", borderRight: "1px solid white" }}
                className=' w-100 p-4 text-white fw-bolder  rounded-0'>Ver Productos</Button>
            <Button
                variant="none"
                style={{ background: "#88DC65", borderLeft: "1px solid white" }}
                className="w-100 p-4 text-white fw-bolder  rounded-0 ">
                Pagos
            </Button>
        </>

    );
})