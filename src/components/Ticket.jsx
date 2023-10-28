import styles from "@/styles/Ticket.module.css"
import { Button, Container, Row, Stack } from "react-bootstrap"
import { obtenerFecha } from "../helper/obtenerFecha"
import { AgregarCeroEnNumeroDeUnDigito } from "../helper/AgregarCeroEnNumeroDeUnDigito"

const DetellaDeTicket = () => {

    return (
        <Stack
            gap={2}
            className="fw-semibold">
            <div className="d-flex justify-content-between">
                <p className="m-0">
                    Base :
                </p>
                <p className="m-0">
                    $ { }
                </p>
            </div>


            <div className="d-flex justify-content-between">
                <p className="m-0">
                    P/A :
                </p>
                <p className="m-0">
                    $ { }
                </p>
            </div>

            <div className="d-flex justify-content-between">
                <p className="m-0">
                    Descuento :
                </p>
                <p className="m-0">
                    $ { }
                </p>
            </div>

            <div className="d-flex justify-content-between">
                <p className="m-0">
                    Cambio :
                </p>
                <p className="m-0">
                    $ { }
                </p>
            </div>
        </Stack>
    )

}

const TicketPinchos = () => {

    return (
        <div className={`${styles.pinchoTicket} d-flex position-absolute  justify-content-between`}>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>

            <p>

            </p>
        </div>
    )
}

const TicketHeader = () => {

    const { nombreMes, dia, año, hora, segundos, minutos } = obtenerFecha()

    return (
        <>
            <TicketPinchos />
            <Stack

                gap={3}
                className="text-white "
            >
                <p className="text-uppercase mt-4 fw-semibold m-0 fs-5 text-center">
                    n° de ticket 0001-000001
                </p>
                <div className=" m-0 d-flex justify-content-between">
                    <p > {dia} de  {nombreMes} del {año} </p>
                    <p>  {AgregarCeroEnNumeroDeUnDigito(hora)} : {AgregarCeroEnNumeroDeUnDigito(minutos)} : {AgregarCeroEnNumeroDeUnDigito(segundos)}</p>
                </div>
            </Stack>
        </>

    )
}

const Ticket = () => {

    return (

        <Container className={`h-100 p-0  pb-3 d-flex flex-column `}>
            <Row
                style={{ backgroundColor: "#746AF4" }}
                className={` position-relative m-0 p-0`}>
                <TicketHeader />
            </Row>
            <Row className="m-0 flex-grow-1">

            </Row>

            <Row className="m-0 mb-3 border-bottom border-top">
                <DetellaDeTicket />
            </Row>

            <Row className="m-0 ">
                <Stack gap={3}>

                    <Button
                        style={{ background: "#746AF4" }}
                        className="d-flex text-white zoom border-0 fw-semibold rounded-3 justify-content-between rounded-1 p-2  align-items-center ">
                        <p className="m-0 mx-2  text-uppercase mx-2">
                            vender
                        </p>
                        <p className="m-0 mx-2">
                            $/ {185.00}
                        </p>
                    </Button>
                    <Button
                        variant="secondary"
                        className="d-flex text-white zoom fw-semibold justify-content-between  rounded-3   p-2  align-items-center ">
                        <p className="m-0 mx-2">
                            {1} ítems en el carrito
                        </p>
                        <i className="fa-regular mx-2 fa-trash-can"></i>
                    </Button>
                </Stack>



            </Row>
        </Container>

    )
}

export default Ticket