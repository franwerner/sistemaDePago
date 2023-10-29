import NavBarPos from "@/components/NavBarPos";
import { Col, Container, Row } from "react-bootstrap";
import ContenedorDeSecciones from "../containers/PagePos/ContenedorDeSecciones/ContenedorDeSecciones";
import { useEventoMostrar } from "../hooks/useEventoMostrar";
import OffCavansNavegacion from "../components/OffCavansNavegacion/OffCavansNavegacion";

const PuntoDeVenta = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <Container fluid className="vh-100 animate__animated overflow-hidden animate__bounceInLeft   p-0">
            <Row className="h-100   m-0">
                <Col
                    style={{ minWidth: "250px", zIndex: "20" }}
                    xs={2}
                    className=" d-none shadow h-100  scrollHidden  d-lg-block  p-0">
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