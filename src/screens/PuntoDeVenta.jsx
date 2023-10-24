import NavBarPos from "@/components//NavBarPos";
import OffCavansNavegacion from "@/components//OffCavansNavegacion";
import { Col, Container, Row } from "react-bootstrap";
import ContenedorDeSecciones from "../containers/PagePos/ContenedorDeSecciones/ContenedorDeSecciones";

const PuntoDeVenta = () => {
    return (
        <Container fluid className="vh-100  p-0">
            <Row className="h-100  m-0">
                <Col style={{ minWidth: "300px",zIndex : "20"}}  xs={2} className="shadow overflow-hidden  p-0">
                    <OffCavansNavegacion />
                </Col>
                <Col className="h-100 d-flex  flex-column p-0">
                    <NavBarPos />
                    <ContenedorDeSecciones />
                </Col>
            </Row>

        </Container>
    );
};

export default PuntoDeVenta