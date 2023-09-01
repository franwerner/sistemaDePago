
import { Nav } from "react-bootstrap"
import { ContenedorDeUsuarios } from "../ContenedorDeUsuarios/ContenedorDeUsuarios"
import { OverlayDefault } from "../OverlayDefault"
import { useEventoMostrar } from "../../hooks/useEventoMostrar"

export const OverlayNavUsuarios = () => {

    const overlayText = "Cambiar Usuario"

    const { mostrar, alternarMostrar } = useEventoMostrar()


    return (
        <>
            <OverlayDefault
                overlayCustom={overlayText} >
                <Nav.Link tabIndex={0}>
                    <i
                        onClick={alternarMostrar}
                        className={`fa-regular fa-address-card d-flex justify-content-center align-items-center text-white fs-5 }`}>

                    </i>
                </Nav.Link>
            </OverlayDefault>

            {mostrar &&
                <ContenedorDeUsuarios
                    mostrar={mostrar}
                    alternarMostrar={alternarMostrar} />
            }
        </>
    )
}
