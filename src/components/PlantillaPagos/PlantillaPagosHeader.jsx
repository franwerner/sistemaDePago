import React from "react";
import { Col, Row } from "react-bootstrap";
import { ListaDeTarifas } from "../ListaDeTarifas";


export const PlantillaPagosHeader = React.memo(() => {

    return (
        <>
            <Row>
                <Col className="px-3">
                    <ListaDeTarifas></ListaDeTarifas>
                </Col>
            </Row>

        </>
    );
});
