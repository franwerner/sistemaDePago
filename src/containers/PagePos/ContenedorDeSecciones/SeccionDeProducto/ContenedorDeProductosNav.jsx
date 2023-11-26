import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropwDownItemsProductos from "./DropwDownFilterProductos";
import BuscadorInput from "@/components//BuscadorInput";
import { memo } from "react";
import { VistaDeCuadricula } from "@/components//VistaDeCuadricula";
import { RemoveFilterIcon } from "@/components//removeFilterIcon";

const ContenedorDeProductosNav = memo(() => {

    return (
        <Col className=" w-100 d-flex  justify-content-start m-0 align-items-center">

            <Container fluid className="h-100 p-0 ">
                <Row className="m-0 h-100">

                    <Col className="d-flex justify-content-evenly p-0 align-items-center">
                        <DropwDownItemsProductos />

                        <RemoveFilterIcon />
                        
                    </Col>

                    <Col className="d-flex justify-content-evenly p-0 align-items-center ">
                        <VistaDeCuadricula />
                    </Col>

                    <Col
                        xs={12}
                        md={"auto"}
                        className="p-0  d-flex justify-content-center justify-content-md-end align-items-center">
                        <BuscadorInput texto={"productos"} />
                    </Col>
                </Row>
            </Container>

        </Col >
    );
})

export default ContenedorDeProductosNav