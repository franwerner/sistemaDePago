import NavBarPos from "@/components/NavBarPos";
import OffCavansNavegacion from "@/components//OffCavansNavegacion";
import { Col, Container, Row } from "react-bootstrap";
import ContenedorDeSecciones from "../containers/PagePos/ContenedorDeSecciones/ContenedorDeSecciones";
import { useEventoMostrar } from "../hooks/useEventoMostrar";

const PuntoDeVenta = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <Container fluid className="vh-100  p-0">
            <Row  className="h-100  m-0">
                <Col
                    style={{ minWidth: "300px", zIndex: "20" }}
                    xs={2}
                    className="shadow d-none d-lg-block overflow-hidden  p-0">
                    <OffCavansNavegacion
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar} />
                </Col>
                <Col className="h-100 d-flex overflow-hidden  flex-column p-0">
                    <NavBarPos alternarMostrar={alternarMostrar} />
                    <ContenedorDeSecciones />
                </Col>
            </Row>

        </Container>
    );
};

export default PuntoDeVenta