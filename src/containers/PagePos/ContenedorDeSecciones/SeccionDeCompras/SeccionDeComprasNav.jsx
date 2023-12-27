import BuscadorInput from "@/components//BuscadorInput"
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault"
import { Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Paginacion } from "@/components//Paginacion"
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault"
import { SeccionNavCol } from "@/components//SeccionNavCol"
import { BuscadorResponsivo } from "@/components//BuscadorResponsivo"

const dropwDownList = [
    { nombre: "Estado", prioridad: 6 },
    { nombre: "Cliente", prioridad: 5 },
    { nombre: "Hora", propiedad: "fecha", prioridad: 2 },
    { nombre: "Empleado", prioridad: 4 },
    { nombre: "Orden", prioridad: 3 },
    { nombre: "Total", prioridad: 1 },
]

const dropwDownList2 = [
    { nombre: "Devuelto", propiedad: "estado", condicional: "devuelto" },
    { nombre: "Pagado", propiedad: "estado", condicional: "pagado" }
]

const PaginacionCompras = () => {

    const { id } = useParams()

    return (
        <Paginacion
            url={"pos/compras"}
            parametro={id}
            largo={15} />
    )
}

const List = [
    { component: <DropDownOrdenDefault size="xl" dropwDownList={dropwDownList} /> },
    { component: <DropDownFilterDefault size="xl" dropwDownList={dropwDownList2} />, },
    { component: <PaginacionCompras /> },

]


const SeccionDeComprasNav = () => {

    return (
        <SeccionNavCol list={List}>
            <BuscadorResponsivo texto={"nro de ticket"} />
        </SeccionNavCol>
    )
}

export default SeccionDeComprasNav