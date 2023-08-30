import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ListaDeTarifas } from "../ListaDeTarifas";


export const PlantillaPagosHeader = React.memo(() => {

    return (
        <>
            <Container fluid className="p-0">
                <Row className="px-3">
                    <ListaDeTarifas></ListaDeTarifas>
                </Row>
            </Container>

        </>
    );
});
