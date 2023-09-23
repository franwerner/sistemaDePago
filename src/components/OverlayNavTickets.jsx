import { Nav } from "react-bootstrap"
import { OverlayDefault } from "./OverlayDefault"

export const OverlayNavTickets = () => {

    const overlayText = "Tickets"

    return (
        <>
            <OverlayDefault
                overlayCustom={overlayText}
            >
                <Nav.Link tabIndex={0} href="/AbrirProductosCobrados">
                    <i className="fa-solid fa-ticket mx-2 d-flex justify-content-center align-items-center text-warning fs-5"></i>
                </Nav.Link>
            </OverlayDefault>
        </>
    )
}