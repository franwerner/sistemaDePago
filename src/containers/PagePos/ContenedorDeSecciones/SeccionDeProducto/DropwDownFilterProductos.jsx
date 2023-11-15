import DropDownFilterDefault from "@/components//DropDownFilterDefault"
import { SuspenseSecondaryPageLoading } from "@/components//SuspenseSecondaryPageLoading"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { lazy } from "react"
import { Dropdown } from "react-bootstrap"

const ModalDeSecciones = lazy(() => import("@/components/ModalDeSecciones"))

const SeccionesDropwItem = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <SuspenseSecondaryPageLoading>


            {
                mostrar && <ModalDeSecciones
                    mostrar={mostrar}
                    alternarMostrar={alternarMostrar} />
            }


            <Dropdown.Item
                onClick={alternarMostrar}
                className="fs-5">Secciones</Dropdown.Item>
                
        </SuspenseSecondaryPageLoading>
    )
}


const DropwDownItemsProductos = () => {

    return (
        <DropDownFilterDefault>
            <SeccionesDropwItem />
            <Dropdown.Item className="fs-5">Favoritos</Dropdown.Item>
            <Dropdown.Item className="fs-5">Mas vendidos</Dropdown.Item>
            <Dropdown.Item className=" fs-5">↑ Cantidad</Dropdown.Item>
            <Dropdown.Item className=" fs-5">↓ Cantidad</Dropdown.Item>
        </DropDownFilterDefault>
    )
}


export default DropwDownItemsProductos