import { Dropdown } from "react-bootstrap"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import { lazy } from "react"

const ModalDeSecciones = lazy(() => import("@/components//ModalDeSecciones"))

const SeccionesDropwItem = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>
            <ModalDeSecciones mostrar={mostrar} alternarMostrar={alternarMostrar} />
            <Dropdown.Item onClick={alternarMostrar} className="fs-5">Secciones</Dropdown.Item>
        </>
    )
}

const DropwDownFilter = () => {

    return (

        <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
                <i className="fa-solid fs-4 fa-filter"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu >
                <SeccionesDropwItem />
                <Dropdown.Item className="fs-5">Favoritos</Dropdown.Item>
                <Dropdown.Item className="fs-5">Mas vendidos</Dropdown.Item>
                <Dropdown.Item className=" fs-5">↑ Cantidad</Dropdown.Item>
                <Dropdown.Item className=" fs-5">↓ Cantidad</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

}

export default DropwDownFilter