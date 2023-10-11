import { Nav } from "react-bootstrap"
import { OverlayDefault } from "./OverlayDefault"
import React from "react"

export const OverlayNavTickets = React.memo(() => {

    const overlayText = "Tickets"

    return (
        <>
            <OverlayDefault
                overlayCustom={overlayText}
            >
                <Nav.Link tabIndex={0}>
                    <i className="fa-solid fa-ticket mx-2 d-flex justify-content-center text-warning align-items-center  fs-5"></i>
                </Nav.Link>
            </OverlayDefault>
        </>
    )
})