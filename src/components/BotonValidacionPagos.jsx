import React, { } from "react";
import { Button } from "react-bootstrap";



export const BotonValidacionPagos = React.memo(({ functionClick, background }) => {

    const isValidated = background ? "#6EC89B" : "#D3D3D3"

    return (
        <>

            <Button
                onClick={functionClick}
                style={{ background : isValidated }}
                className="fs-5 fs-md-4 border-0">
                <span className="me-1">
                    Detalle
                </span>
                <i className="fa-solid fa-angles-right"></i>
            </Button>

        </>
    );
});