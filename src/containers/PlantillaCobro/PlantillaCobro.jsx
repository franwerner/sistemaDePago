
import { PlantillaCobroBody } from "./PlantillaCobroBody"
import { PlantillaCobroHeader } from "./PlantillaCobroHeader"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/PlantillaCobro.module.css"
import { useSeleccionarElemento } from "@/hooks//useSeleccionProducto"
import React from "react"



export const PlantillaCobro = React.memo(() => {

    const { borrarSeleccion, seleccion, seleccionarElemento } = useSeleccionarElemento()

    return (
        <>
            <Container fluid className="p-0">

                <Row  >
                    <Col className={`d-flex flex-column  ${styles.contenedorCobroPrincipal}`}>
                        <PlantillaCobroHeader
                            borrarSeleccion={borrarSeleccion}
                            seleccion={seleccion}
                        />
                        <PlantillaCobroBody
                            seleccion={seleccion}
                            seleccionarElemento={seleccionarElemento}
                        />
                    </Col>
                </Row>

            </Container>

        </>
    )
})
