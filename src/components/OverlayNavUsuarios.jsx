
import { Nav } from "react-bootstrap"
import { ContenedorDeUsuarios } from "../containers/ContenedorDeUsuarios/ContenedorDeUsuarios"
import { OverlayDefault } from "./OverlayDefault"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import { useEvitarRenderizados } from "../hooks/useEvitarRenderizados"
import React from "react"


export const OverlayNavUsuarios = React.memo(() => {

    const overlayText = "Cambiar Usuario"

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { registrarConteo, conteoRenderizados } = useEvitarRenderizados()

    const onClick = () => {
        alternarMostrar()
        registrarConteo()
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

            {conteoRenderizados >= 1 && (
                <ContenedorDeUsuarios
                    mostrar={mostrar}
                    alternarMostrar={alternarMostrar}
                />
            )}
        </>
    )
})
