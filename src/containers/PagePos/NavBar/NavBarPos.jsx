import { Container, Nav, Navbar, Stack } from "react-bootstrap"
import styles from "@/styles/NavBarPos.module.css"
import IconBell from "@/components/IconBell"
import IconMessage from "@/components/IconMessage"
import React from "react"
import { MenuDeUsuario } from "./MenuDeUsuario"

const NavBarPos = React.memo(({ alternarMostrar }) => {
    return (

        <Navbar
            id={styles.navBar}
            className=" p-0 shadow-sm border-bottom  ">

            <Container
                fluid
                className="p-0 h-100 ">

                <Nav className=" justify-content-between  justify-content-lg-end w-100  align-items-center ">

                    <i
                        onClick={alternarMostrar}
                        className={`${styles.iconBars} cursor-pointer  zoom fa-brands text-ligthdark fs-0 mx-2  text-start p-2  d-lg-none fa-microsoft`} />

                    <Stack
                        direction="horizontal"
                        gap={1}>

                        <IconBell />

                        <IconMessage />

                        <div className={`${styles.imgContainer}   d-flex justify-content-center align-items-center position-relative border border-secondary rounded-circle overflow-hidden`}>
                            <img
                                height={60}
                                width={60}
                                alt="foto-empleado"
                                className="z-1"
                                loading="lazy"
                                src="https://img.freepik.com/foto-gratis/primer-plano-hombre-negocios-serio-camisa-blanca-mirando-camara-pie-confiado_1258-26762.jpg" />

                        </div>

                        <MenuDeUsuario />

                    </Stack>
                </Nav>

            </Container>

        </Navbar>

    )
})

export default NavBarPos