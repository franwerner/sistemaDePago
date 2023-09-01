import React, { useCallback } from "react";
import { Container, Row } from "react-bootstrap";
import { ContenedorDeTarifas } from "../ContenedorDeTarifas";
import { BotonTarifas } from "../BotonTarifas";
import { useEventoMostrar } from "../../hooks/useEventoMostrar";
import { useEvitarRenderizados } from "../../hooks/useEvitarRenderizados";

export const PlantillaPagosHeader = React.memo(() => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { conteoRenderizados, registrarConteo } = useEvitarRenderizados()

    const onClick = useCallback(() => {
        alternarMostrar()
        registrarConteo()
    }, [])

    return (
        <>
            <Container fluid className="mx-0" >
                <Row className="border p-2" >

                    <BotonTarifas
                        alternarMostrar={onClick}>
                    </BotonTarifas>

                    {
                        conteoRenderizados >= 1 &&

                        <ContenedorDeTarifas
                            alternarMostrar={alternarMostrar}
                            mostrar={mostrar}
                        />
                    }

                </Row>
            </Container>

        </>
    );
});
