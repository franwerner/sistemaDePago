import { Container, Nav, Navbar, Stack } from "react-bootstrap"
import styles from "@/styles/NavBarPos.module.css"
import IconBell from "@/components/Icons/IconBell"
import IconMessage from "@/components/Icons/IconMessage"
import React, { memo } from "react"
import { MenuDeUsuario } from "./MenuDeUsuario"

const NavBarBody = memo(() => {
    return (
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
    )
})

const NavBarPos = memo(({ alternarMostrar, isFullScreen }) => {

    const display = isFullScreen ? "d-block" : "d-lg-none"

    return (

        <Navbar
            id={styles.navBar}
            className=" p-0 shadow-sm border-bottom  ">

            <Container
                fluid
                className="p-0 h-100 ">

                <Nav className=" justify-content-between  justify-content-lg-end w-100  align-items-center ">

                    <span className=" w-100 ">
                        <i
                            style={{ maxWidth: "min-content" }}
                            onClick={alternarMostrar}
                            className={`${styles.iconBars}  cursor-pointer fa-brands text-ligthdark fs-0 mx-2  text-start p-2  ${display} fa-microsoft`} />
                    </span>

                    <NavBarBody />
                </Nav>

            </Container>

        </Navbar>

    )
})

export default NavBarPos