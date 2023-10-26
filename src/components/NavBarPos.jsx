import { Container, Nav, Navbar } from "react-bootstrap"
import styles from "@/styles/NavBarPos.module.css"
import IconBell from "./IconBell"
import IconMessage from "./IconMessage"
import React from "react"

const NavBarPos = React.memo(({ alternarMostrar }) => {

    return (
        <Navbar
            className={`${styles.navBarContainer} shadow-sm border`}>
            <Container
                fluid
                className="p-0 h-100 ">

                <Nav className=" justify-content-end w-100  flex-row align-items-center ">


                    <i
                    style={{left : 0}}
                    onClick={alternarMostrar} 
                    className={`${styles.iconBars} fa-brands position-absolute text-start p-2 mx-4 d-lg-none fa-microsoft`}></i>


                    <IconBell />
                    <IconMessage />

                    <div className={`${styles.imgContainer} bg-danger border overflow-hidden rounded-circle`}>

                        <img
                            height={80}
                            width={80}
                            loading="lazy"
                            src="https://img.freepik.com/foto-gratis/primer-plano-hombre-negocios-serio-camisa-blanca-mirando-camara-pie-confiado_1258-26762.jpg" />
                    </div>

                    <div className="d-flex  text-break flex-column mx-1">
                        <p
                            style={{ color: "#555", fontSize: "16px", }}
                            className="fw-semibold m-0 ">Franco Werner</p>
                        <p
                            className="m-0 text-start"
                            style={{ fontSize: "14px" }}>Empleado</p>
                    </div>

                </Nav>

            </Container>
        </Navbar>
    )
})

export default NavBarPos