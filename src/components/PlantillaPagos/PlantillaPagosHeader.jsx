import React from "react";
import { Container, Row } from "react-bootstrap";
import { ContenedorDeTarifas } from "../ContenedorDeTarifas";
import { BotonTarifas } from "../BotonTarifas";
import { useEventoMostrar } from "../../hooks/useEventoMostrar";

export const PlantillaPagosHeader = React.memo(() => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <>
            <Container fluid className="mx-0" >
                <Row className="border p-2" >

                    <BotonTarifas
                        alternarMostrar={alternarMostrar}>
                    </BotonTarifas>

                    <ContenedorDeTarifas
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar}
                    ></ContenedorDeTarifas>
                    
                </Row>
            </Container>

        </>
    );
});
