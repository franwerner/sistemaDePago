import { Row } from "react-bootstrap"
import SeccionDeCajaPedidosNav from "./SeccionDeCajaPedidosNav"
import TablaDePedidos from "./TablaDePedidos"

const SeccionDeCajaPedidos = () => {

    return (
        <>
            <Row className="shadow m-0 p-2 p-md-3 d-flex justify-content-between" >
                <SeccionDeCajaPedidosNav />
            </Row>

            <Row className="m-0 overflow-hidden  justify-content-center  p-1 p-md-3 h-100">
                <TablaDePedidos />
            </Row>

        </>
    )
}

export default SeccionDeCajaPedidos