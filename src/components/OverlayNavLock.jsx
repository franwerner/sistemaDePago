import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import { OverlayDefault } from "./OverlayDefault"
import React from "react"
import {NavLink } from "react-router-dom"


export const OverylayNavLock = React.memo(() => {


    const { mostrar, alternarMostrar } = useEventoMostrar()

    const overlayText = "Cerrar session"

    return (

        <OverlayDefault
            overlayCustom={overlayText}
        >
            <NavLink
                onMouseEnter={alternarMostrar}
                onMouseLeave={alternarMostrar}
                tabIndex={0}
                to={"/seleccion"}
                style={{ width: "30px", marginTop: "-3px" }}
                className="fs-5"

            >
                {mostrar ?
                    <i className={`fa-solid  d-flex  justify-content-center fa-lock-open text-success  `}></i> :
                    <i className={`fa-solid  d-flex justify-content-center text-danger fa-lock `}></i>
                }


            </NavLink>
        </OverlayDefault>
    )

})
