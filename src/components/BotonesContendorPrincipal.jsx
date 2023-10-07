import React from "react";
import { Button } from "react-bootstrap";

export const BotonesContendorPrincipal = React.memo(({ alternarMostrar, mostrar, alternarMostrarContenedor }) => {


    const textoButton = mostrar ? "Ver cobros" : "Ver productos"

    return (

        <>
            <Button
                variant="none"
                onClick={alternarMostrar}
                style={{ background: "#6EC89B", borderRight: "1px solid white" }}
                className=' w-100 p-4 text-white fw-bolder  rounded-0'>{textoButton}</Button>
            <Button
                onClick={alternarMostrarContenedor}
                variant="none"
                style={{ background: "#6EC89B", borderLeft: "1px solid white" }}
                className="w-100 p-4 text-white fw-bolder  rounded-0 ">
                Pagos
            </Button>
        </>

    );
})