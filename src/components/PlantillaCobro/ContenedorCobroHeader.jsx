import { Col, Container, Row } from "react-bootstrap"
import styles from "../../styles/PlantillaCobro.module.css"
import React from "react"
import { useEventoMostrar } from "../../hooks/useEventoMostrar"
import { BotonBorrarProducto, BotonEditarProducto, BotonEliminarProducto } from "../BotonesCrud"
import { EdicionPreciosProductos } from "../EdicionPreciosProductos"

export const ContenedorCobroHeader = React.memo(() => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <>
            <Container fluid >
                <Row className={` p-2   ${styles.botonesCrud}`}>
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
