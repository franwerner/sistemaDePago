import { Col, Container, Row } from "react-bootstrap";
import ContenedorDeSecciones from "../containers/PagePos/ContenedorDeSecciones/ContenedorDeSecciones";
import { useEventoMostrar } from "../hooks/useEventoMostrar";
import OffCavansNavegacion from "../containers/PagePos/OffCavansNavegacion/OffCavansNavegacion";
import NavBarPos from "../containers/PagePos/NavBar/NavBarPos";
const PuntoDeVenta = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { mostrar: fullScreen, alternarMostrar: setFullScreen } = useEventoMostrar()

    const handleScreen = () => {
        setFullScreen(!fullScreen)
        if (mostrar) alternarMostrar(false)

    }

    const styleScreen = fullScreen ? { width: "0px" } : { minWidth: "250px" }

    return (
        <Container fluid className="vh-100   overflow-hidden p-0">
            <Row className="h-100   m-0">
                <Col
                    style={{ ...styleScreen, transitionDuration: "0.5s" }}
                    xs="2"
                    className="shadow h-100 d-none  scrollHidden  d-lg-block  p-0">
                    <OffCavansNavegacion
                        handleScreen={handleScreen}
                        isFullScreen={fullScreen}
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar} />
                </Col>
                <Col className="h-100 d-flex overflow-hidden  flex-column p-0">
                    <NavBarPos
                        isFullScreen={fullScreen}
                        alternarMostrar={alternarMostrar} />
                    <ContenedorDeSecciones />
                </Col>
            </Row>

        </Container>
    );
};

export default PuntoDeVenta