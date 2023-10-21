import { BotonTarifas } from "@/components//BotonTarifas"
import { SuspenseLoading } from "@/components//SuspenseLoading"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { lazy, useCallback } from "react"
import { Container, Row } from "react-bootstrap"

const ListadoDeTarifas = lazy(() => import("@/components/ListadoDeTarifas"))

const PlantillaPagosHeader = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()


    const onClick = useCallback(() => {
        alternarMostrar()
    }, [])


    return (
        <Container fluid className=" flex-grow-0 p-0 " >
            <Row className="m-2 mb-0" >

                <BotonTarifas
                    alternarMostrar={onClick}>
                </BotonTarifas>

                {
                    mostrar &&

                    <SuspenseLoading>
                        <ListadoDeTarifas
                            alternarMostrar={alternarMostrar}
                            mostrar={mostrar}
                        />
                    </SuspenseLoading>
                }

            </Row>
        </Container>
    );
}

export default PlantillaPagosHeader
