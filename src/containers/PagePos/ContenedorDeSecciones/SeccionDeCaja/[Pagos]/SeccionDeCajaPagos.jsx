import { Row } from "react-bootstrap"
import { SeccionDeCajaPagosNav } from "./SeccionDeCajaPagosNav"
import { SeccionDeCajaPagosBody } from "./SeccionDeCajaPagosBody"

const SeccionDeCajasPagos = () => {
    return (
        <>
            <Row className="shadow d-flex justify-content-between  p-3">
                <SeccionDeCajaPagosNav />
            </Row>
            <Row className="shadow border border-2 m-md-5 m-0 my-4 h-100 scrollBarPersonalizada">
                <SeccionDeCajaPagosBody />
            </Row>
        </>
    )
}

export default SeccionDeCajasPagos