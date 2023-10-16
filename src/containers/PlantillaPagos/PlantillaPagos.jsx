import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/PlantillaPagos.module.css"
import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import React, { useCallback } from "react"
import { useEvitarRenderizados } from "@/hooks/useEvitarRenderizados"
import { BotonTarifas } from "@/components//BotonTarifas"
import { ListadoDeTarifas } from "@/components/ListadoDeTarifas"
import { PlantillaPagosBody } from "./PlantillaPagosBody"



const PlantillaPagosHeader = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { conteoRenderizados, registrarConteo } = useEvitarRenderizados()

    const onClick = useCallback(() => {
        alternarMostrar()
        registrarConteo()
    }, [])

    return (
        <Container fluid className=" flex-grow-0 p-0 " >
            <Row className="m-2 mb-0" >

                <BotonTarifas
                    alternarMostrar={onClick}>
                </BotonTarifas>

                {
                    conteoRenderizados >= 1 &&

                    <ListadoDeTarifas
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar}
                    />
                }

            </Row>
        </Container>
    );
}



export const PlantillaPagos = React.memo(({ alternarMostrarContenedor, alternarMostrar }) => {


    return (
            <Container fluid className={`flex-grow-0  ${styles.contenedorPlantillaPagos}`}>
                <Row className="h-100">

                    <Col className="d-flex  p-0 h-100 flex-column">

                        <PlantillaPagosHeader />
                        <PlantillaPagosBody
                            alternarMostrar={alternarMostrar}
                            alternarMostrarContenedor={alternarMostrarContenedor} />

                    </Col>
                </Row>
            </Container>
    )
})

