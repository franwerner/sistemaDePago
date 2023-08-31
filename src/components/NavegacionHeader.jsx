import { Container, Navbar, Nav } from "react-bootstrap"
import styles from "../styles/NavegacionHeader.module.css"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import { OverlayDefault } from "./OverlayDefault"
import { ListaUsuarios } from "./ListaUsuarios"
import { BuscadorInput } from "./BuscadorInput"
import React from "react"

const OverylayNavLock = () => {


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
                style={{ width: "40px", marginTop: "-9px" }}
                className=" d-flex justify-content-center  fs-4"
            >

                {mostrar ?
                    <i className={`fa-solid fa-lock-open text-danger  `}></i> :
                    <i className={`fa-solid fa-lock text-success  `}></i>
                }

            </Nav.Link>
        </OverlayDefault>
    )

}

const OverlayNavTickets = () => {

    const overlayText = "Tickets"
    return (
        <>
            <OverlayDefault
                overlayCustom={overlayText}
            >
                <Nav.Link tabIndex={0} href="/AbrirProductosCobrados">
                    <i className="fa-solid fa-ticket mx-4 text-warning fs-4"></i>
                </Nav.Link>
            </OverlayDefault>
        </>
    )
}

const OverlayNavUsuarios = () => {

    const overlayText = "Cambiar Usuario"

    const { mostrar, alternarMostrar } = useEventoMostrar()


    return (
        <>
            <OverlayDefault
                overlayCustom={overlayText} >
                <Nav.Link tabIndex={0}>
                    <i onClick={alternarMostrar} className={`fa-regular fa-address-card text-white fs-4 }`}></i>
                </Nav.Link>
            </OverlayDefault>

            {mostrar &&
                <ListaUsuarios mostrar={mostrar} alternarMostrar={alternarMostrar}></ListaUsuarios>
            }
        </>
    )
}



export const NavegacionHeader = React.memo(({ mostrar }) => {

    return (
        <>
            <Navbar  expand="md" className={`${styles.navegacionHeader}`}>
                <Container fluid>
                    <Navbar.Brand className="w-50 d-flex text-white">
                        Logo
                    </Navbar.Brand>
                 
                    <Navbar.Toggle  className={`bg-white ${styles.navBarToggle}`} aria-controls="navbarCollapse" />
                  
               
                    <Navbar.Collapse id="navbarCollapse"
                        className="d-md-flex  justify-content-between w-100">
                        {!mostrar &&
                            <Nav.Item className="d-flex my-0">
                                <BuscadorInput></BuscadorInput>
                            </Nav.Item>
                        }
                        <Nav className="justify-content-between justify-content-md-end  flex-row align-items-center ">
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
