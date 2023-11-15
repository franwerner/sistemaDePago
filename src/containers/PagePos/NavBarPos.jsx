import { Container, Nav, Navbar, Stack } from "react-bootstrap"
import styles from "@/styles/NavBarPos.module.css"
import IconBell from "@/components/IconBell"
import IconMessage from "@/components/IconMessage"
import React from "react"

const NavBarPos = React.memo(({ alternarMostrar }) => {
    return (
        <Navbar
            id={styles.navBar}
            className="scrollBarPersonalizada  p-0 shadow-sm border-bottom">

            <Container
                fluid
                id={styles.navBarContainer}
                className="p-0 scrollBarPersonalizada h-100 ">

                <Nav className=" justify-content-between justify-content-lg-end w-100  align-items-center ">

                    <i onClick={alternarMostrar}
                        className={`${styles.iconBars} fa-brands text-ligthdark fs-0  text-start p-2  mx-2 d-lg-none fa-microsoft`} />

                    <Stack direction="horizontal" gap={2}>

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

                        <div className="me-1">
                            <p
                                style={{ color: "#555", fontSize: "16px", }}
                                className="fw-semibold m-0 ">Franco Werner</p>
                            <p
                                className="m-0 text-start"
                                style={{ fontSize: "14px" }}>Empleado</p>
                        </div>
                    </Stack>

                </Nav>

            </Container>
        </Navbar>
    )
})

export default NavBarPos