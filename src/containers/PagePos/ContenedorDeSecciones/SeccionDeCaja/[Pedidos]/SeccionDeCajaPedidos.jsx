import { Row } from "react-bootstrap"
import SeccionDeCajaPedidosNav from "./SeccionDeCajaPedidosNav"
import TablaDePedidos from "./TablaDePedidos"

const SeccionDeCajaPedidos = () => {

    console.log("#a")
    
    return (
        <>
            <Row
                style={{ height: "60px" }}
                className="shadow m-0" >
                <SeccionDeCajaPedidosNav />
            </Row>

            <Row className="m-0 overflow-hidden  justify-content-center  p-1 p-md-3 h-100">
                <TablaDePedidos />
            </Row>

        </>
    )
}

export default SeccionDeCajaPedidos