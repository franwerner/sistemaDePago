import { Row } from "react-bootstrap";
import ContenedorDeCarrito from "./ContenedorDeCarrito";
import ContenedorDeNav from "./ContenedorDeNav";

const SeccionDeVeta = () => {
    return (
        <>
            <Row style={{ minHeight: "90px",maxHeight : "90px" }} className="shadow h-100  m-0">
                <ContenedorDeNav />
            </Row>

            <Row  className="m-0 overflow-hidden h-100 w-100 shadow p-2">
                <ContenedorDeCarrito />
            </Row>
        </>
    );


};


export default SeccionDeVeta