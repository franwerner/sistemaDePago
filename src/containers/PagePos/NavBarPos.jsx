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
            show={mostrar}
            alternarMostrar={alternarMostrar}
            onHide={alternarMostrar}>
            <Modal.Header closeButton>
                <Modal.Title className="fs-4 text-ligthdark">
                    Franco Werner
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ASdad</p>
            </Modal.Body>
            <Modal.Footer>
                <Link
                to={"/"}
                className="w-100">
                    <Button
                        variant="outline-danger"
                        className="w-100 fw-medium fs-5"
                        type="button"
                        aria-label="Cerrar session">
                        Cerrar Session
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal >
    )
}


const UsuarioTest = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>
            <div onClick={alternarMostrar} className="cursor-pointer me-1 bg-hover">
                <p
                    style={{ color: "#555", fontSize: "16px", }}
                    className="fw-semibold m-0 ">Franco Werner</p>
                <p
                    className="m-0 text-start"
                    style={{ fontSize: "14px" }}>Empleado</p>
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

                        <div className={`${styles.imgContainer} cursor-pointer d-flex justify-content-center align-items-center position-relative border border-secondary rounded-circle overflow-hidden`}>
                            <img
                                height={60}
                                width={60}
                                alt="foto-empleado"
                                className="z-1"
                                loading="eager"
                                src="https://img.freepik.com/foto-gratis/primer-plano-hombre-negocios-serio-camisa-blanca-mirando-camara-pie-confiado_1258-26762.jpg" />

                        </div>
                        <UsuarioTest />

                    </Stack>

                </Nav>

            </Container>

        </Navbar>

    )
})

export default NavBarPos