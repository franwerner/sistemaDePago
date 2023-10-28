import { BotonTarifas } from "@/components//BotonTarifas";
import BuscadorInput from "@/components//BuscadorInput";
import { Col } from "react-bootstrap";

const ContenedorDeNav = () => {


    return (
        <>
            <Col className="d-flex align-items-center">
                <BotonTarifas></BotonTarifas>
            </Col>


            <Col xs={4} className="p-0 d-flex mx-3 bg-dangerd-flex justify-content-center align-items-center">
                <BuscadorInput />
            </Col>
        </>
    )
}

export default ContenedorDeNav