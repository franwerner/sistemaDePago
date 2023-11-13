import BuscadorInput from "@/components//BuscadorInput"
import DropDownOrdenDefault from "@/components//DropDownOrdenDefault"
import { Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Paginacion } from "@/components//Paginacion"

const dropwDownList = [
    { nombre: "Estado", prioridad: 6 },
    { nombre: "Cliente", prioridad: 5 },
    { nombre: "Hora", prioridad: 2 },
    { nombre: "Empleado", prioridad: 4 },
    { nombre: "Orden", prioridad: 3 },
    { nombre: "Total", prioridad: 1 },
]



const PaginacionCompras = () => {
    const { id } = useParams()

    return (
        <Paginacion url={"pos/compras"} parametro={id} largo={15} />
    )
}


const SeccionDeComprasNav = () => {

    return (
        <>
            <Col
                md={{ order: "0", span: "auto" }}
                xs={{ order: "3", span: "6" }}
                className="d-flex p-1 align-items-center">
                <DropDownOrdenDefault dropwDownList={dropwDownList} />
            </Col>
            <Col
                xs="12" md="6"
                className="d-flex justify-content-center align-items-center">
                <BuscadorInput texto={"nro de orden"} />
            </Col>
            <Col
                md={{ order: "0", span: "auto" }}
                xs={{ order: "3", span: "6" }}
                className="d-flex justify-content-end  align-items-center">
                <PaginacionCompras />
            </Col>

        </>

    )
}

export default SeccionDeComprasNav