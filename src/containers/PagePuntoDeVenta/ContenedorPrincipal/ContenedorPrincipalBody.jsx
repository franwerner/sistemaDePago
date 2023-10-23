import React from "react"
import { Col, Row } from "react-bootstrap"
import { PlantillaCobro } from "../PlantillaCobro/PlantillaCobro"
import { PlantillaPagos } from "../PlantillaPagos/PlantillaPagos"
import { PlantillaProductos } from "../PlantillaProductos/PlantillaProductos"
import styles from "@/styles/ContenedorPrincipal.module.css"


export const ContenedorPrincipalBody = React.memo(({ mostrar, alternarMostrar, alternarMostrarContenedor }) => {

    const onHide = !mostrar ? "d-flex" : "d-none"

    return (
        <Row className={` w-100 h-100 overflow-hidden flex-grow-1 m-0 p-0`}>

            <Col style={{ maxWidth: "560px" }} className={`${onHide} w-100 ${styles.columnaInteractiva}  overflow-hidden h-100 p-0  d-flex flex-column`}>

                <PlantillaCobro />
                <PlantillaPagos
                    alternarMostrar={alternarMostrar}
                    alternarMostrarContenedor={alternarMostrarContenedor} />
            </Col>

            <PlantillaProductos
                alternarMostrarContenedor={alternarMostrarContenedor}
                alternarMostrar={alternarMostrar} />
        </Row>
    )

})