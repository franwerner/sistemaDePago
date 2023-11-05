import BuscadorInput from "@/components//BuscadorInput"
import { Suspense, lazy } from "react"
import { Col, Dropdown } from "react-bootstrap"

const DropDownOrdenDefault = lazy(() => import("@/components/DropDownOrdenDefault"))


const DropwDownPedidos = () => {


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DropDownOrdenDefault>
                <Dropdown.Item>Hora</Dropdown.Item>
                <Dropdown.Item>Empleado</Dropdown.Item>
                <Dropdown.Item>Numero de orden</Dropdown.Item>
                <Dropdown.Item>Estado</Dropdown.Item>
            </DropDownOrdenDefault>
        </Suspense>
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