import styles from "@/styles/SeccionDeVenta.module.css"
import { Container, Row, Stack } from "react-bootstrap"
import React from "react"
import { DetellaDeTicket } from "./DetallateDeTicket"
import { TicketHeader } from "./TicketHeader"
import { TicketBody } from "./TicketBody"

import { BotonTrashItems } from "@/components/BotonTrashItems"
import { BotonPagos } from "@/components//BotonPagos"



const Ticket = React.memo(() => {

    return (

        <Container className={`h-100 p-0 scrollHidden  pb-3 d-flex flex-column `}>
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