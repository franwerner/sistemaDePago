import { Row } from "react-bootstrap"
import { SeccionDeClientesNav } from "./SeccionDeClientesNav"
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider"
import { SeccionDeClientasBody } from "./SeccionDeClientasBody"
import { SeccionNavDefault } from "@/components//SeccionNavDefault"

const SeccionDeClientes = () => {

    return (
        <QueryParamsProvider>

            <SeccionNavDefault>
                <SeccionDeClientesNav />
            </SeccionNavDefault>

            <Row className="m-0 h-100 scrollBarPersonalizada">
                <SeccionDeClientasBody />
            </Row>
            
        </QueryParamsProvider>
    )
}

export default SeccionDeClientes