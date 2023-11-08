import BuscadorInput from "@/components//BuscadorInput"
import DropDownOrdenDefault from "@/components//DropDownOrdenDefault"
import { Col, Dropdown } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Paginacion } from "@/components//Paginacion"

const DropwDownPedidos = () => {

    return (
        <DropDownOrdenDefault>
            <Dropdown.Item>Hora</Dropdown.Item>
            <Dropdown.Item>Empleado</Dropdown.Item>
            <Dropdown.Item>Numero de orden</Dropdown.Item>
            <Dropdown.Item>Estado</Dropdown.Item>
            <Dropdown.Item>Cliente</Dropdown.Item>
        </DropDownOrdenDefault>

    )
}

const PaginacionPedidos = () => {
    const { id } = useParams()

    return (
        <Paginacion url={"pos/caja/pedidos"} parametro={id} largo={15} />
    )
}


const SeccionDeCajaPedidosNav = () => {

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
                <PaginacionPedidos />
            </Col>

        </>

    )
}

export default SeccionDeCajaPedidosNav