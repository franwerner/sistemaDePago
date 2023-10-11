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
        <Container fluid className="mx-0 " >
            <Row className="border mb-2 " >

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
        <section id="seccion-pagos"
            className="h-100 scrollHidden  ">
            <Container fluid className="flex-grow-1  h-100 ">
                <Row className="h-100 ">

                    <Col className={`d-flex h-100 p-0 p-md-2  flex-column  ${styles.contenedorPlantillaPagos} `}>

                        <PlantillaPagosHeader />
                        <PlantillaPagosBody
                            alternarMostrar={alternarMostrar}
                            alternarMostrarContenedor={alternarMostrarContenedor} />

                    </Col>
                </Row>
            </Container>


        </section>
    )
})

