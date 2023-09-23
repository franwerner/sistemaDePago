import React from "react";

export const MetodosDePagosVacios = React.memo(() => {

    return (
        <>
            <div className="text-center my-5 ">

                <i style={{ fontSize: "140px", color: "#555", opacity: "30%" }} className="fa-solid   fa-file-invoice-dollar"></i>

                <p style={{ top: "105%", color: "#555" }} className="fs-5">
                    No hay ningun pago seleccionado.
                </p>

            </div>

        </>
    );

});