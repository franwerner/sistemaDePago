import BuscadorInput from "@/components//BuscadorInput"
import DropDownOrdenDefault from "@/components//DropDownOrdenDefault"
import { Col, Dropdown } from "react-bootstrap"


const DropwDownPedidos = () => {


    return (
        <>

            <DropDownOrdenDefault>
                <Dropdown.Item>Hora</Dropdown.Item>
                <Dropdown.Item>Empleado</Dropdown.Item>
                <Dropdown.Item>Numero de orden</Dropdown.Item>
                <Dropdown.Item>Estado</Dropdown.Item>
                <Dropdown.Item>Cliente</Dropdown.Item>
            </DropDownOrdenDefault>

        </>

    )
}

const SeccionDeCajaPedidosNav = () => {

    return (
        <>
            <Col className="d-flex p-1 align-items-center">
                <DropwDownPedidos />
            </Col>
            <Col className="d-flex align-items-center">
                <BuscadorInput texto={"nro de orden"} />
            </Col>
            <Col>

            </Col>

        </>

    )
}

export default SeccionDeCajaPedidosNav