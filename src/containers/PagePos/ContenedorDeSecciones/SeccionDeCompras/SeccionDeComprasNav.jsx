import BuscadorInput from "@/components//BuscadorInput"
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDetalleDefault/DropDownOrdenDefault"
import { Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Paginacion } from "@/components//Paginacion"
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault"

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


const SeccionDeComprasNav = () => {

    return (
        <>
            <Col
                xs="auto"
                md="3"
                className="d-flex justify-content-between align-items-center">
                <DropDownOrdenDefault dropwDownList={dropwDownList} />

                <span className="mx-1">
                    <DropDownFilterDefault dropwDownList={dropwDownList2} />
                </span>
            </Col>

            <Col
                xs={{ order: "0", span: "auto" }}
                md={{ order: "2", span: "2" }}
                className="d-flex justify-content-end  align-items-center">
                <PaginacionCompras />
            </Col>
            <Col
                xs="12" md="5"
                className="d-flex justify-content-center align-items-center">
                <BuscadorInput texto={"nro de orden"} />
            </Col>

        </>

    )
}

export default SeccionDeComprasNav