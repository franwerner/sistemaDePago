import BuscadorInput from "@/components//BuscadorInput"
import DropDownOrdenDefault from "@/components//DropDownOrdenDefault"
import { Col, Dropdown } from "react-bootstrap"
import { useParams, useSearchParams } from "react-router-dom"
import { Paginacion } from "@/components//Paginacion"
import { useSearchQuery } from "@/hooks//useSearchQuery"

const dropwDownList = [
    { nombre: "Estado", valor: "estado" },
    { nombre: "Cliente", valor: "cliente" },
    { nombre: "Hora", valor: "hora" },
    { nombre: "Empleado", valor: "empleado" },
    { nombre: "Numero de orden", valor: "numeroDeorden" },
]

const DropwDownItem = ({ valor, onClick, nombre }) => {

    return (
        <Dropdown.Item data-name={valor} onClick={onClick}>{nombre}</Dropdown.Item>
    )
}

const DropwDownPedidos = () => {

    const { agregarParametros, removerParametro } = useSearchQuery()


    return (

        <DropDownOrdenDefault>
            {
                dropwDownList.map(item =>
                    <DropwDownItem
                        key={item.nombre}
                        valor={item.valor}
                        nombre={item.nombre}
                        onClick={agregarParametros} />
                )
            }

        </DropDownOrdenDefault>

    )
}

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
                <DropwDownPedidos />
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