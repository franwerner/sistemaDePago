import { Button, Container, Modal, Nav, Navbar, Stack } from "react-bootstrap"
import styles from "@/styles/NavBarPos.module.css"
import IconBell from "@/components/IconBell"
import IconMessage from "@/components/IconMessage"
import React from "react"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { Link } from "react-router-dom"


const MenuDeUsuario = ({ alternarMostrar, mostrar }) => {
    return (
        <Modal
            centered
            show={mostrar}
            alternarMostrar={alternarMostrar}
            onHide={alternarMostrar}>
            <Modal.Header closeButton>
                <Modal.Title className="fs-4 text-ligthdark">
                    Franco Werner
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack
                    gap={3}
                    direction="horizontal"
                    className="align-items-center p-1 ">
                    <p className="m-0 fs-6 ">Ventas realizadas</p>
                    <div className="vr"></div>
                    <p className="m-0 fw-medium">15/30</p>
                </Stack>
            </Modal.Body>
            <Modal.Footer className="d-block d-sm-flex">
                    <Button
                        variant="none"
                        className="fw-medium fs-6 p-1"
                        type="button"
                        aria-label="Cerrar session">
                        <i className="fa-solid me-1 fa-arrow-right-from-bracket fa-rotate-180"></i>
                        Cerrar Session
                    </Button>
                <Button
                    className=" fw-medium w-50 fs-6 p-1"
                    variant="none"
                    type="button"
                    aria-label="Cerrar session">
                    Cambiar de usuario
                </Button>
            </Modal.Footer>
        </Modal >
    )
}


const UsuarioTest = ({ children }) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>
            <div
                role=""
                onClick={alternarMostrar}
                className="d-flex bg-hover  px-md-1 rounded-3 mx-md-1 align-items-center">
                {children}
            </div>

            {
                mostrar && <MenuDeUsuario
                    alternarMostrar={alternarMostrar}
                    mostrar={mostrar} />
            }
        </>
    )
}



const NavBarPos = React.memo(({ alternarMostrar }) => {
    return (

        <Navbar
            id={styles.navBar}
            className="scrollBarPersonalizada   p-0 shadow-sm border-bottom">

            <Container
                fluid
                id={styles.navBarContainer}
                className="p-0 scrollBarPersonalizada m h-100 ">

                <Nav className=" justify-content-between justify-content-lg-end w-100  align-items-center ">

                    <i onClick={alternarMostrar}
                        className={`${styles.iconBars} fa-brands text-ligthdark fs-0  text-start p-2  mx-2 d-lg-none fa-microsoft`} />

                    <Stack
                        direction="horizontal"
                        gap={2}>

                        <IconBell />

                        <IconMessage />

                        <UsuarioTest>
                            <div className={`${styles.imgContainer} me-md-1 cursor-pointer d-flex justify-content-center align-items-center position-relative border border-secondary rounded-circle overflow-hidden`}>
                                <img
                                    height={60}
                                    width={60}
                                    alt="foto-empleado"
                                    className="z-1"
                                    loading="eager"
                                    src="https://img.freepik.com/foto-gratis/primer-plano-hombre-negocios-serio-camisa-blanca-mirando-camara-pie-confiado_1258-26762.jpg" />

                            </div>

                            <div className="cursor-pointer me-md-1 ">
                                <p
                                    style={{ color: "#555", fontSize: "16px", }}
                                    className="fw-semibold m-0 ">Franco  Werner</p>
                                <p
                                    className="m-0 text-start"
                                    style={{ fontSize: "14px" }}>Empleado</p>
                            </div>

                        </UsuarioTest>

                    </Stack>
                </Nav>

            </Container>

        </Navbar>

    )
})

export default NavBarPos