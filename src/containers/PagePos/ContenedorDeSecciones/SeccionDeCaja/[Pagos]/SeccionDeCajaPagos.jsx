import { Row } from "react-bootstrap"
import { SeccionDeCajaPagosNav } from "./SeccionDeCajaPagosNav"
import { SeccionDeCajaPagosBody } from "./SeccionDeCajaPagosBody"

const SeccionDeCajasPagos = () => {
    return (
        <>
            <Row className="shadow d-flex justify-content-between  p-3">
                <SeccionDeCajaPagosNav />
            </Row>
            <Row>
                <SeccionDeCajaPagosBody />
            </Row>
        </>
    )
}

export default SeccionDeCajasPagos