import { Col, Container, Row } from "react-bootstrap"
import styles from "../../styles/PlantillaCobro.module.css"
import React from "react"
import { useEventoMostrar } from "../../hooks/useEventoMostrar"
import { EdicionPreciosProductos } from "../EdicionPreciosProductos"
import { BotonEliminarProducto } from "../BotonesCrud/BotonEliminarProducto"
import { BotonBorrarProducto } from "../BotonesCrud/BotonBorrarProducto"
import { BotonEditarProducto } from "../BotonesCrud/BotonEditarPruducto"

export const ContenedorCobroHeader = React.memo(() => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <>
            <Container fluid>
                <Row  className={` p-2  ${styles.botonesCrud}`}>
                    <Col>
                        <BotonEditarProducto alternarMostrar={alternarMostrar} />
                    </Col>
                    <Col >
                        <BotonBorrarProducto />
                    </Col>
                    <Col >
                        <BotonEliminarProducto></BotonEliminarProducto>
                    </Col>
                </Row>
            </Container>

            {mostrar && <EdicionPreciosProductos
                alternarMostrar={alternarMostrar}
            />}
        </>
    )

})
