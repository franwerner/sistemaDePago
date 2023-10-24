import { Col, Container, Offcanvas, OffcanvasTitle, Row } from "react-bootstrap"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import styles from "@/styles/OffCavansNavegacion.module.css"
import React from "react"
import { Link, useLocation} from "react-router-dom"

const ListaDeMenu = [
    {
        nombre: "Productos",
        icon: "fa-solid fa-box-open"
    },
    {
        nombre: "Compras",
        icon: "fa fa-bag-shopping"
    },
    {
        nombre: "Caja",
        icon: "fa-solid fa-cash-register",
    },
    {
        nombre: "Clientes",
        icon: "fa-solid fa-users"
    },
    {
        nombre: "Almacen",
        icon: "fa-solid fa-cubes"
    },
    {
       nombre : "Venta",
       icon : "fa-solid fa-cart-shopping"
    }

]

const SeccionContenido = React.memo(({ icon, nombre }) => {

    return <Col className="d-flex  justify-content-start  align-items-center ">

        <i
            style={{ minWidth: "30px" }}
            className={`text-center ${icon} fs-5 mx-2`}></i>
        <p className="m-0">{nombre}</p>

    </Col>
})

const ListadoDeSecciones = React.memo(({ nombre, icon }) => {

    const nombreLowerCase = nombre.toLocaleLowerCase()

    const { pathname } = useLocation()

    return (
        <Link
            style={{ textDecoration: "none" }}
            to={`${nombreLowerCase}`}>
            <Row className={`${styles.seccionesMenu} ${styles[pathname.match(nombreLowerCase) ? "seccionElegida" : ""]}  rounded-3  my-4`}>

                <SeccionContenido
                    nombre={nombre}
                    icon={icon} />
            </Row>
        </Link>
    )

})


const OffCavansNavegacion = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()


    return (
        <Offcanvas
            responsive="sm"
            onHide={alternarMostrar}
            show={!mostrar}
            scroll={true}
            backdrop={false}>
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <OffcanvasTitle className="p-2 text-center ">
                <p
                    style={{ letterSpacing: "2px", color: "#555" }}
                    className="my-2 text-nowrap fs-3">Urban Vog<
                        span style={{ color: "#746AF4" }}>ue</span>
                </p>
            </OffcanvasTitle>
            <Offcanvas.Body className=" mx-3">
                <Container className="my-5 ">
                    {
                        ListaDeMenu.map(({ nombre, icon }) =>
                            <ListadoDeSecciones
                                key={nombre}
                                nombre={nombre}
                                icon={icon} />
                        )
                    }

                </Container>
            </Offcanvas.Body>
        </Offcanvas>

    )
}

export default OffCavansNavegacion