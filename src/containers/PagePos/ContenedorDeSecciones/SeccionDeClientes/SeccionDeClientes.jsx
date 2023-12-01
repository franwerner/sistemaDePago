import { Row } from "react-bootstrap"
import { SeccionDeClientesNav } from "./SeccionDeClientesNav"
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider"
import { SeccionDeClientasBody } from "./SeccionDeClientasBody"

const SeccionDeClientes = () => {

    return (
        <QueryParamsProvider>
            <Row className="m-0 shadow p-3">
                <SeccionDeClientesNav />
            </Row>
            <Row className="m-0 h-100 scrollBarPersonalizada">
                <SeccionDeClientasBody />
            </Row>
        </QueryParamsProvider>
    )
}

export default SeccionDeClientes