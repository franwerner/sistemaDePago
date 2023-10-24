import { Container, Navbar, Nav } from "react-bootstrap"
import styles from "@/styles/NavegacionHeader.module.css"
import React, { lazy } from "react"
import { OverlayNavUsuarios } from "./OverlayNavUsuarios"
import { OverlayNavTickets } from "./OverlayNavTickets"
import { OverylayNavLock } from "./OverlayNavLock"
import { SuspenseLoading } from "./SuspenseLoading"

const BuscadorInput = lazy(() => import("./BuscadorInput"))

export const NavegacionHeader = React.memo(({ mostrar }) => {

    return (
        <Navbar
            expand="sm"
            className={`overflow-hidden ${styles.navegacionHeader}`}>
            <Container fluid>
                <Navbar.Brand className="w-50 d-flex justify-content-start text-white">
                    <p className="p-0 m-0">
                        Logo
                    </p>
                </Navbar.Brand>

                <Navbar.Toggle
                    className={`bg-white ${styles.navBarToggle}`}
                    aria-controls="navbarCollapse" />


                <Navbar.Collapse
                    id="navbarCollapse"
                    className="d-md-flex  justify-content-between w-100 ">
                    <Nav className="justify-content-between justify-content-sm-end w-100  flex-row align-items-center ">
                        {!mostrar &&
                            <Nav.Item className="d-flex justify-content-start justify-content-md-start me-2 my-1  my-0 w-100">
                                <SuspenseLoading>
                                    <BuscadorInput />
                                </SuspenseLoading>
                            </Nav.Item>
                        }
                        {/* <OverlayNavUsuarios /> */}
                        <OverlayNavTickets />
                        <OverylayNavLock />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
})
