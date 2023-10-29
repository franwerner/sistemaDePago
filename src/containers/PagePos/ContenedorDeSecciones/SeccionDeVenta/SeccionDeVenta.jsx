import { Row } from "react-bootstrap";
import ContenedorDeCarrito from "./ContenedorDeCarrito";
import ContenedorDeSeccionesNav from "./ContenedorDeSeccionesNav";

const SeccionDeVenta = () => {
    return (
        <>
            <Row
                style={{ minHeight: "70px", maxHeight: "80px" }}
                className="shadow m-0">
                <ContenedorDeSeccionesNav />
            </Row>

            <Row className="m-0 overflow-hidden p-3 h-100 w-100 shadow ">
                <ContenedorDeCarrito />
            </Row>
        </>
    );


};


export default SeccionDeVenta