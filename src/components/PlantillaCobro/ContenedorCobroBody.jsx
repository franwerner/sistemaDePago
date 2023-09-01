import React, { useContext, useEffect, useRef } from "react"
import { Container, Row } from "react-bootstrap"
import { productoReducerContext } from "../../context/Contextos"
import { CarritoDeProductoVacio } from "./CarritoDeProductoVacio"
import { ListaDeProductosACobrar } from "./ListaDeProductosACobrar"
import styles from "../../styles/PlantillaCobro.module.css"
import { TotalPrecioProductos } from "../TotalPrecioProductos"


export const ContenedorCobroBody = React.memo(() => {

    const { listaProducto, eliminarProducto } = useContext(productoReducerContext)

    const referido = useRef(null)

    useEffect(() => {

        if (!referido.current) return

        referido.current.scrollTop = referido.current.scrollHeight;

    }, [listaProducto])

    return (
        <>

            <Container fluid ref={referido} className={`flex-grow-1 ${styles.contenedorCobroBody}`}>
                {listaProducto.length == 0 ? <CarritoDeProductoVacio></CarritoDeProductoVacio> :

                    <>
                        <ListaDeProductosACobrar
                            listaProducto={listaProducto}
                            eliminarProducto={eliminarProducto}
                        >
                        </ListaDeProductosACobrar>

                        <TotalPrecioProductos />

                    </>
                }

            </Container>
        </>
    )
})