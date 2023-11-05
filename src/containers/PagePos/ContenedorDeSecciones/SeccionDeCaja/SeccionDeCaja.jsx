import { Row } from "react-bootstrap"
import { SeccionDeCajaNav } from "./SeccionDeCajaNav"
import { SeccionDeCajaContenedor } from "./SeccionDeCajaContedor/SeccionDeCajaContenedor"


const SeccionDeCaja = () => {

    
    return (
        <>
            <Row
                style={{ minHeight: "50px" }}
                className="shadow m-0">
                <SeccionDeCajaNav />
            </Row>
            <Row className="p-md-3 p-xl-2 p-xxl-4 m-0 h-100 ">
                <SeccionDeCajaContenedor />
            </Row>
        </>
    )
}

export default SeccionDeCaja