import { Row } from "react-bootstrap";
import ContenedorDeCarrito from "./ContenedorDeCarrito";
import ContenedorDeNav from "./ContenedorDeNav";

const SeccionDeVeta = () => {
    return (
        <>
            <Row style={{ minHeight: "90px" }} className="shadow-sm  m-0">
                <ContenedorDeNav />
            </Row>

            <Row  className="m-0  overflow-hidden h-100 shadow p-3">
                <ContenedorDeCarrito />
            </Row>
        </>
    );


};


export default SeccionDeVeta