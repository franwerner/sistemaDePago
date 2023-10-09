import { Nav } from "react-bootstrap"
import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import { OverlayDefault } from "./OverlayDefault"
import React from "react"


export const OverylayNavLock = React.memo(() => {


    const { mostrar, alternarMostrar } = useEventoMostrar()

    const overlayText = "Cerrar session"

    return (
        <OverlayDefault
            overlayCustom={overlayText}
        >
            <Nav.Link
                onMouseEnter={alternarMostrar}
                onMouseLeave={alternarMostrar}
                href="#action2"
                tabIndex={0}
                style={{ width: "30px", marginTop: "-3px" }}
                className="  fs-5"
            >

                {mostrar ?
                    <i className={`fa-solid  d-flex  justify-content-center fa-lock-open text-danger  `}></i> :
                    <i className={`fa-solid  d-flex justify-content-center fa-lock text-success  `}></i>
                }

            </Nav.Link>
        </OverlayDefault>
    )

})
