import { Row } from "react-bootstrap"
import { SeccionDeCajaNav } from "./SeccionDeCajaNav"
import { SeccionDeCajaContenedor } from "./SeccionDeCajaContedor/SeccionDeCajaContenedor"


const SeccionDeCaja = () => {
    return (
        <>
            <Row
                style={{ minHeight: "90px" }}
                className="shadow m-0">
                <SeccionDeCajaNav />
            </Row>
            <Row className="p-md-5 m-0 h-100 ">
                <SeccionDeCajaContenedor />
            </Row>
        </>
    )
}

export default SeccionDeCaja