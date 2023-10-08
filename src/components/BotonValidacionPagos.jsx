import React, { } from "react";

export const BotonValidacionPagos = React.memo(({ functionClick, background }) => {

    const isValidated = background ? "#6EC89B" : "#D3D3D3"

    return (


        <div
            onClick={functionClick}
            style={{ background: isValidated, cursor: "pointer" }}
            className="fs-5 text-white fw-bolder  py-md-0 my-md-2 px-3 d-flex align-items-center justify-content-center  py-4 mx-md-5 flex-grow-1 flex-md-grow-0 border-0">
            <span className="me-1">
                Detalle
            </span>
            <i className="fa-solid fa-angles-right"></i>
        </div>


    );
});