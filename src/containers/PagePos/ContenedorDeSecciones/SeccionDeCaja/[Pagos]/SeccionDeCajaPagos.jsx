import { Row } from "react-bootstrap"
import { SeccionDeCajaPagosNav } from "./SeccionDeCajaPagosNav"
import { SeccionDeCajaPagosBody } from "./SeccionDeCajaPagosBody"
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider"
import { SeccionNavDefault } from "@/components//SeccionNavDefault"
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault"

const SeccionDeCajasPagos = () => {
    return (
        <QueryParamsProvider>
            <SeccionNavDefault>
                <SeccionDeCajaPagosNav />
            </SeccionNavDefault>

            <SeccionBodyDefault clasesAdd="p-md-5 ">
                <SeccionDeCajaPagosBody />
            </SeccionBodyDefault>

        </QueryParamsProvider>
    )
}

export default SeccionDeCajasPagos