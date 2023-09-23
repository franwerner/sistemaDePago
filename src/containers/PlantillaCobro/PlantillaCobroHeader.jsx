import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/PlantillaCobro.module.css"
import React from "react"
import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import { EdicionPreciosProductos } from "../EdicionPreciosProductos"
import { BotonEliminarProducto } from "@/components/BotonEliminarProducto"
import { BotonBorrarProducto } from "@/components/BotonBorrarProducto"
import { BotonEditarProducto } from "@/components/BotonEditarPruducto"


export const PlantillaCobroHeader = React.memo(({seleccion, borrarSeleccion}) => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <>
            <Container fluid className=" flex-grow-0 p-0 ">
                <Row className={` p-2 ${styles.botonesCrud}`}>
                    <Col>
                        <BotonEditarProducto alternarMostrar={alternarMostrar} />
                    </Col>
                    <Col >
                        <BotonBorrarProducto
                            seleccion={seleccion}
                            borrarSeleccion={borrarSeleccion} />
                    </Col>
                    <Col >
                        <BotonEliminarProducto seleccion={seleccion} />
                    </Col>
                </Row>
            </Container>

            {mostrar &&
                <EdicionPreciosProductos
                    alternarMostrar={alternarMostrar}
                    mostrar={mostrar}
                    seleccion={seleccion}
                />}
        </>
    )

})
