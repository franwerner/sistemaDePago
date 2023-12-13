import BuscadorInput from "@/components//BuscadorInput"
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault"
import { Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Paginacion } from "@/components//Paginacion"
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault"
import { SeccionNavCol } from "@/components//SeccionNavCol"

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
    { component: <DropDownOrdenDefault dropwDownList={dropwDownList} /> },
    { component: <DropDownFilterDefault dropwDownList={dropwDownList2} />, },
    {
        component: <BuscadorInput texto="nro de orden" />,
        props: { className: "d-flex justify-content-center  align-items-center", xs: { order: 2, span: 12 }, xl: { order: 0, span: "auto" } }
    },
    { component: <PaginacionCompras /> },

]


const SeccionDeComprasNav = () => {

    return (
        <SeccionNavCol list={List} />
    )
}

export default SeccionDeComprasNav