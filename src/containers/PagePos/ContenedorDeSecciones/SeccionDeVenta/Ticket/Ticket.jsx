import styles from "@/styles/SeccionDeVenta.module.css"
import { Button, Container, Row, Stack } from "react-bootstrap"
import React, { useContext } from "react"
import { DetellaDeTicket } from "./DetallateDeTicket"
import { TicketHeader } from "./TicketHeader"
import { TicketBody } from "./TicketBody"
import TotalAVender from "@/components//TotalAVenderMemoizado"
import { Link } from "react-router-dom"
import { productoReducerContext } from "@/context//Contextos"

const BotonTrashItems = () => {

    const { listaProducto, borrarListado } = useContext(productoReducerContext)

    return <Button
        variant="secondary"
        className="d-flex text-white  fw-semibold justify-content-between bg-secondary  rounded-3   p-2  align-items-center ">
        <p className="m-0 mx-2 text-truncate">
            {listaProducto.length} ítems en el carrito
        </p>
        <i
            style={{ cursor: "no-drop" }}
            onMouseUp={borrarListado}
            className="fa-regular zoom mx-2 fs-4 fa-trash-can"></i>
    </Button>

}

const BotonPagos = () => {
    return <Link
        style={{ textDecoration: "none" }}
        to={"pagos"}>
        <Button
            variant="primary"
            style={{ background: "#746AF4" }}
            className="d-flex text-white w-100  border-0 fw-semibold rounded-3 justify-content-between rounded-1 p-2  align-items-center ">
            <p className="m-0 mx-2  text-uppercase mx-2">
                pagos
            </p>
            <p className="m-0 mx-2 text-truncate">
                $/ {<TotalAVender />}
            </p>
        </Button>
    </Link>
}


const Ticket = React.memo(() => {

    return (

        <Container className={`h-100 p-0 overflow-hidden pb-3 d-flex flex-column `}>
            <Row className={`${styles.ticketHeader} position-relative m-0 p-0`}>
                <TicketHeader />
            </Row>

            <Row className="m-0 flex-grow-1">
                <TicketBody />
            </Row>

            <Row className={`${styles.detalleDeTicket} m-0 mb-3  border-bottom border-top`}>
                <DetellaDeTicket />
            </Row>

            <Row className="m-0 ">
                <Stack gap={3}>

                    <BotonPagos />

                    <BotonTrashItems />

                </Stack>
            </Row>
        </Container>

    )
})

export default Ticket