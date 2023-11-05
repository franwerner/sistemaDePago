import { Col, Row } from "react-bootstrap";
import styles from "@/styles/seccionDeVenta.module.css"
import ContenedorDeCards from "./ContenedorDeCards";
import { ContenedorNavVentaPagos } from "./ContenedorNavVentaPagos";


const SeccionVentaPagos = () => {

    return (
        <>
            <Row className="m-0  p-3 shadow">
                <ContenedorNavVentaPagos />
            </Row>

            <Row className={`${styles.seccionVentaPagos} m-0 scrollBarPersonalizada h-100`}>
                <Col className="p-3 d-flex justify-content-center">
                    <ContenedorDeCards />
                </Col>
            </Row>

        </>
    );
};

export default SeccionVentaPagos
