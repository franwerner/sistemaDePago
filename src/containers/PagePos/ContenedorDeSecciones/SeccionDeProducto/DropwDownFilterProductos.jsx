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
                Secciones
            </Dropdown.Item>
        </SuspenseCompontentsLoading>
    )
}

const dropwDownList = [
    { nombre: "Mas vendidos" },
    { nombre: "Secciones", component: <SeccionesDropwItem /> },
    { nombre: "Favoritos" },
    { nombre: "Lote" },
]

const DropwDownItemsProductos = () => {

    return (
        <DropDownFilterDefault dropwDownList={dropwDownList}>
        </DropDownFilterDefault>
    )
}


export default DropwDownItemsProductos