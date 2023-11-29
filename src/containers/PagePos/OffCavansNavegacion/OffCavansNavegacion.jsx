import { Accordion, Offcanvas, OffcanvasTitle } from "react-bootstrap"
import React from "react"
import { AccordionSeccionesOffCavans } from "./AccordionSeccionesOffCavans"

const ListaDeMenu = [
    {
        nombre: "Productos",
        icon: "fa-solid fa-box-open",
        subRutas: ["productos"]
    },
    {
        nombre: "Compras",
        icon: "fa fa-bag-shopping",
        subRutas: ["compras"]
    },
    {
        nombre: "Caja",
        icon: "fa-solid fa-cash-register",
        subRutas: ["caja", "pagos",]
    },
    {
        nombre: "Clientes",
        icon: "fa-solid fa-users",
        subRutas: ["clientes"]
    },
    {
        nombre: "Inventario",
        icon: "fa-solid fa-cubes",
        subRutas: ["inventario","añadir","gestion"]
    },
    {
        nombre: "Venta",
        icon: "fa-solid fa-cart-shopping",
        subRutas: ["venta", "pagos"]
    }

]


const OffCavansNavegacion = ({ alternarMostrar, mostrar }) => {

    return (
        <Offcanvas
            responsive="lg"
            onHide={alternarMostrar}
            show={mostrar}
            backdrop={true}>
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <OffcanvasTitle className="p-2 text-center ">
                <p
                    style={{ color: "#555" }}
                    className="my-2  fs-3">Urban Vog
                    < span style={{ color: "#746AF4" }}>ue</span>
                </p>
            </OffcanvasTitle>
            <Offcanvas.Body className="mx-3">
                <Accordion className="my-3  w-100">
                    {
                        ListaDeMenu.map(({ nombre, icon, subRutas }, index) =>
                            <AccordionSeccionesOffCavans
                                index={index}
                                subRutas={subRutas}
                                key={nombre}
                                nombre={nombre}
                                icon={icon} />
                        )
                    }

                </Accordion>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCavansNavegacion