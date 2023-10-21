
import { Nav } from "react-bootstrap"
import { OverlayDefault } from "./OverlayDefault"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import React, { lazy } from "react"
import { SuspenseLoading } from "./SuspenseLoading"

const ContenedorDeUsuarios = lazy(() => import("../containers/ContenedorDeUsuarios/ContenedorDeUsuarios"))

export const OverlayNavUsuarios = React.memo(() => {

    const overlayText = "Cambiar Usuario"

    const { mostrar, alternarMostrar } = useEventoMostrar()



    const onClick = () => {
        alternarMostrar()
    }

    return (
        <>
            <OverlayDefault
                overlayCustom={overlayText} >
                <Nav.Link tabIndex={0}>
                    <i
                        onClick={onClick}
                        className={`fa-regular fa-address-card d-flex justify-content-center align-items-center text-white fs-5 }`}>

                    </i>
                </Nav.Link>
            </OverlayDefault>

            {mostrar && (
                <SuspenseLoading>
                    <ContenedorDeUsuarios
                        mostrar={mostrar}
                        alternarMostrar={alternarMostrar}
                    />
                </SuspenseLoading>
            )}
        </>
    )
})
