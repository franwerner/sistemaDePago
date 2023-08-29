import React, { useContext, useEffect, useRef } from "react"
import { Container, Row } from "react-bootstrap"
import { productoReducerContext } from "../../context/Contextos"

import { CarritoDeProductoVacio } from "./CarritoDeProductoVacio"
import { ListaDeProductosACobrar } from "./ListaDeProductosACobrar"
import styles from "../../styles/PlantillaCobro.module.css"
import { TotalPrecioProductos } from "../TotalPrecioProductos"


export const ContenedorCobroBody = React.memo(() => {

    const { listaProducto } = useContext(productoReducerContext)

    const referido = useRef(null)

    useEffect(() => {

        if (!referido.current) return

        referido.current.scrollTop = referido.current.scrollHeight;

    }, [listaProducto])

    return (
        <>
            <Container fluid ref={referido} className={` ${styles.contenedorCobroBody}`}>
                {listaProducto.length == 0 ? <CarritoDeProductoVacio></CarritoDeProductoVacio> :
                    <>
                        <ListaDeProductosACobrar
                            listaProducto={listaProducto}
                        >
                        </ListaDeProductosACobrar>

                        <Row>
                            <TotalPrecioProductos/>
                        </Row>
                    </>
                }
            </Container>

        </>
    )
})