import { Nav } from "react-bootstrap"
import { OverlayDefault } from "./OverlayDefault"
import React, { useCallback, useContext } from "react"
import { customToastNotificacionContext } from "../context/Contextos"

const Overlay = React.memo(({ onClick }) => {

    const overlayText = "Tickets"

    return (
        <OverlayDefault
            overlayCustom={overlayText}
        >
            <Nav.Link tabIndex={0}>
                <i onClick={onClick} className="fa-solid fa-ticket mx-2 d-flex justify-content-center align-items-center text-warning fs-5"></i>
            </Nav.Link>
        </OverlayDefault>
    )

})


const fetchTest = async () => {

    const url = "https://jsonplaceholder.typicoade.com/todos/1"
    const options = {
        method: "GET",
        headers: { "Content-type": "application/json" }
    }

    try {

        const response = await fetch(url, options)

        if (!response.ok) throw Error

        const data = await response.json()

        return data

    } catch (error) {
        return { codigo: "3B" }
    }



}

export const OverlayNavTickets = () => {

    const { generarAlerta, buscarCodigoDeMensajes, CustomMensaje } = useContext(customToastNotificacionContext)

    const onClick = useCallback(() => {

        const fetching = async () => {
            try {
                const response = await fetchTest()

                buscarCodigoDeMensajes(response)

            } catch (error) {
                if (error instanceof CustomMensaje) {
                    generarAlerta(error)
                }

            }


        }

        fetching()
    }, [])


    return (
        <Overlay onClick={onClick}></Overlay>
    )
}