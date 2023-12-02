import styles from "@/styles/SeccionDeVenta.module.css"
import { Button, Container, Row, Stack } from "react-bootstrap"
import React, { useCallback, useContext } from "react"
import { DetellaDeTicket } from "./DetallateDeTicket"
import { TicketHeader } from "./TicketHeader"
import { TicketBody } from "./TicketBody"
import { Link } from "react-router-dom"
import { productoReducerContext } from "@/context//Contextos"
import buscarCodigoMensajePersonalizado from "@/common//helper/buscarCodigoMensajePersonalizado"
import { TotalListaProductoMemoizado } from "../Utils/useTotalListaProducto"

const BotonTrashItems = () => {

    const { borrarListado } = useContext(productoReducerContext)

    return <Button
        variant="ligthdark"
        className="d-flex text-white  fw-semibold justify-content-between rounded-3   p-2  align-items-center ">
        <p className="m-0 mx-2 text-truncate">
            <TotalListaProductoMemoizado obj={"items"}/> ítems en el carrito
        </p>
        <i
            onMouseUp={borrarListado}
            className="fa-regular cursor-block zoom mx-2 fs-4 fa-trash-can"></i>
    </Button>
}

const BotonPagos = () => {

    const { listaProducto } = useContext(productoReducerContext)

    const buscarProductoSobrePasado = listaProducto.find(item => item.cantidad > item.max)

    const onClick = () => {
        if (buscarProductoSobrePasado) {
            buscarCodigoMensajePersonalizado({ codigo: "4F" })
        }
    }

    const ButtonPagos = useCallback(() => {
        return <Button
            variant="primary"
            style={{ background: "#746AF4" }}
            className="d-flex text-white w-100  border-0 fw-semibold rounded-3 justify-content-between rounded-1 p-2  align-items-center ">
            <p className="m-0 mx-2  text-uppercase mx-2">
                pagos
            </p>
            <p className="m-0 mx-2 text-truncate">
                $/ <TotalListaProductoMemoizado obj={"adeudoTotal"} />
            </p>
        </Button>
    }, [])

    return <Link
        onClick={onClick}
        style={{ textDecoration: "none" }}
        to={"pagos"}>
        <ButtonPagos />
    </Link>
}


const Ticket = React.memo(() => {

    return (

        <Container className={`h-100 p-0 overflow-hidden pb-3 d-flex flex-column `}>
            <Row className={`${styles.ticketHeader} bg-primary position-relative m-0 p-0`}>
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