import BuscadorInput from "@/components//BuscadorInput";
import { Col } from "react-bootstrap";

const ContenedorDeSeccionesNav = () => {


    return (
        <>
            {/* <Col className="d-flex align-items-center">
           
            </Col> */}


            <Col className="p-0 d-flex mx-3 bg-dangerd-flex justify-content-center align-items-center">
                <BuscadorInput />
            </Col>
        </>
    )
}

export default ContenedorDeSeccionesNav