import React from "react";
import { Button } from "react-bootstrap";

export const BotonesContendorPrincipal = React.memo(({ alternarMostrar, mostrar, alternarMostrarContenedor }) => {


    const textoButton = mostrar ? "Revisión" : "Productos"

    return (

        <>
            <Button
                onClick={alternarMostrarContenedor}
                variant="none"
                style={{ background: "white",color : "#6EC89B" }}
                className="w-100 p-4  fw-bolder  rounded-0 ">
                Pagos
            </Button>
            <Button
                variant="none"
                onClick={alternarMostrar}
                style={{ background: "#6EC89B" }}
                className=' w-100 p-4 text-white fw-bolder  rounded-0'>{textoButton}</Button>

        </>

    );
})