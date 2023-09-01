import { Container, Navbar, Nav } from "react-bootstrap"
import styles from "../../styles/NavegacionHeader.module.css"
import { useEventoMostrar } from "../../hooks/useEventoMostrar"
import { OverlayDefault } from "../OverlayDefault"
import { BuscadorInput } from "../BuscadorInput"
import React from "react"
import { OverlayNavUsuarios } from "./OverlayNavUsuarios"
import { OverlayNavTickets } from "./OverlayNavTickets"
import { OverylayNavLock } from "./OverlayNavLock"



export const NavegacionHeader = React.memo(({ mostrar }) => {

    return (
        <>
            <Navbar expand="md" className={`${styles.navegacionHeader}`}>
                <Container fluid>
                    <Navbar.Brand className="w-50 d-flex text-white">
                        Logo
                    </Navbar.Brand>

                    <Navbar.Toggle className={`bg-white ${styles.navBarToggle}`} aria-controls="navbarCollapse" />


                    <Navbar.Collapse id="navbarCollapse"
                        className="d-md-flex  justify-content-between w-100">
                        {!mostrar &&
                            <Nav.Item className="d-flex my-0">
                                <BuscadorInput></BuscadorInput>
                            </Nav.Item>
                        }
                        <Nav

                            className="justify-content-between w-100  justify-content-md-end flex-row align-items-center ">
                            <OverlayNavUsuarios></OverlayNavUsuarios>
                            <OverlayNavTickets></OverlayNavTickets>
                            <OverylayNavLock></OverylayNavLock>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
})
