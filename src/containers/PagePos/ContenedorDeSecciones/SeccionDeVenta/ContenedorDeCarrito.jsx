import { Col } from "react-bootstrap";
import TablaDeVentas from "./TablaDeVentas/TablaDeVentas";


const ContenedorDeCarrito = () => {
    return (
        <>
            <Col  className="p-0 m-0 shadow h-100  scrollBarPersonalizada ">
                <TablaDeVentas />
            </Col>
            <Col className="d-none d-md-block" xs={4}>

            </Col>
        </>
    );
};


export default ContenedorDeCarrito