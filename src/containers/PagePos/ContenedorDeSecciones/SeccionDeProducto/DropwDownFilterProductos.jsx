import DropDownFilterDefault from "@/components//DropDownFilterDefault"
import { SuspenseCompontentsLoading } from "@/components//SuspenseCompontentsLoading"
import { retrasoTest } from "@/common//helper/retrasoTest"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { lazy } from "react"
import { Dropdown } from "react-bootstrap"

const ModalDeSecciones = lazy(() => retrasoTest(import("@/components/ModalDeSecciones"), 555))

const SeccionesDropwItem = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <SuspenseCompontentsLoading texto="Secciones">


            {
                mostrar && <ModalDeSecciones
                    mostrar={mostrar}
                    alternarMostrar={alternarMostrar} />
            }



            <Dropdown.Item
                onClick={alternarMostrar}
                className="">
                Secciones
            </Dropdown.Item>
        </SuspenseCompontentsLoading>
    )
}


const DropwDownItemsProductos = () => {

    return (
        <DropDownFilterDefault>
            <SeccionesDropwItem />
            <Dropdown.Item >Favoritos</Dropdown.Item>
            <Dropdown.Item>Mas vendidos</Dropdown.Item>
            <Dropdown.Item >↑ Cantidad</Dropdown.Item>
            <Dropdown.Item>↓ Cantidad</Dropdown.Item>
        </DropDownFilterDefault>
    )
}


export default DropwDownItemsProductos