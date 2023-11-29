import DropDownFilterDefault from "@/components//DropDownFilterDefault"
import { SuspenseCompontentsLoading } from "@/components//SuspenseCompontentsLoading"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { lazy } from "react"
import { Dropdown } from "react-bootstrap"

const ModalDeSecciones = lazy(() => import("@/components/ModalDeSecciones"))

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
                className="fw-medium">
                Secciones<i className="fa-solid text-primary mx-2 fs-6 fa-check"></i>
            </Dropdown.Item>
        </SuspenseCompontentsLoading>
    )
}

const dropwDownList = [
    { nombre: "Mas vendidos" },
    { nombre: "Secciones", component: <SeccionesDropwItem /> },
    { nombre: "Favoritos" },
]

const DropwDownItemsProductos = () => {

    return (
        <DropDownFilterDefault dropwDownList={dropwDownList}>
        </DropDownFilterDefault>
    )
}


export default DropwDownItemsProductos