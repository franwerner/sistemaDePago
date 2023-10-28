import { Button, Stack } from "react-bootstrap"

export const TicketFooter = () => {
    return (
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

    )
}