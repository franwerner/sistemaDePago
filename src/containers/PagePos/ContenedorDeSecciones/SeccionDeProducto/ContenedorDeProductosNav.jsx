import styles from "@/styles/seccionDeProductos.module.css"
import { lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropwDownItemsProductos from "./DropwDownFilterProductos";
import BuscadorInput from "@/components//BuscadorInput";



const FiltradoDeFilas = () => {

    return (
        <>
            <i className="fa-solid fs-4 fa-list"></i>
            <i className="fa-solid fs-4 mx-1 fa-table-cells-large"></i>
            <i className="fa-solid fs-4 fa-table-cells"></i>
        </>
    )
}

const ContenedorDeProductosNav = () => {

    return (
        <Col className=" w-100 d-flex  justify-content-start m-0 align-items-center">

            <Container fluid className="h-100 p-0 ">
                <Row className="m-0 h-100">

                    <Col className="d-flex justify-content-evenly p-0 align-items-center">

                        <DropwDownItemsProductos />

                        <Link to={"?"}>
                            <i className="fa-solid fs-4 fa-filter-circle-xmark"></i>
                        </Link>

                    </Col>

                    <Col className="d-flex justify-content-evenly p-0 align-items-center ">
                        <FiltradoDeFilas />
                    </Col>

                    <Col xs={12} md={"auto"} className="p-0 d-flex justify-content-center justify-content-md-end align-items-center">
                        <BuscadorInput texto={"productos"} />
                    </Col>
                </Row>
            </Container>

        </Col >
    );
};

export default ContenedorDeProductosNav