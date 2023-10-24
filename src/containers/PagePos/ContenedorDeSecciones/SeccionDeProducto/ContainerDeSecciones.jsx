
import styles from "@/styles/seccionDeProductos.module.css"
import { lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";

const DropwDownFilter = lazy(() => import("@/components/DropDownFilter"))
const BuscadorInput = lazy(() => import("@/components/BuscadorInput"))

const seccionesProductos = [
    {
        "nombre": "Panaderia"
    },
    {
        "nombre": "Kiosco"
    },
    {
        "nombre": "Helados"
    },

]




const ContainerDeSecciones = ({ elegirSeccion = () => { } }) => {

    return (
        <Col className=" w-100 d-flex  justify-content-start m-0 align-items-center">

            <Container fluid className="h-100 ">
                <Row className="m-0 h-100">

                    <Col className="d-flex justify-content-evenly  align-items-center">

                        <DropwDownFilter />

                        <i className="fa-solid fs-4 fa-list"></i>
                        <i className="fa-solid fs-4 fa-table-cells-large"></i>
                        <i className="fa-solid fs-4 fa-table-cells"></i>
                    </Col>
                    <Col xs={"auto"} className="p-0 d-flex justify-content-end align-items-center">
                        <BuscadorInput />
                    </Col>
                </Row>
            </Container>

        </Col >
    );
};

export default ContainerDeSecciones