
import { Container } from "react-bootstrap"
import styles from "@/styles/PlantillaCobro.module.css"
import React, { lazy, useContext, useEffect, useRef } from "react"
import { productoReducerContext } from "@/context//Contextos"
import { SuspenseLoading } from "@/components//SuspenseLoading"

const ListaDeProductosACobrar = lazy(() => import("./ListaDeProductosACobrar"))
const TotalPrecioProductos = lazy(() => import("@/components//TotalPrecioProductos"))
const CarritoDeProductoVacio = lazy(() => import("@/components//CarritoDeProductoVacio"))

export const PlantillaCobro = React.memo(() => {

    const { listaProducto, seleccionarProducto, ultimoSeleccionado } = useContext(productoReducerContext)

    const referido = useRef(null)
    useEffect(() => {

        if (!referido.current) return

        referido.current.scrollTop = referido.current.scrollHeight;

    }, [listaProducto.length])



    return (

        <Container
            fluid
            ref={referido}
            className={` scrollBarPersonalizada  px-1 p-0 flex-grow-1 h-100 ${styles.contenedorCobroPrincipal}`} >

            <SuspenseLoading>
                {listaProducto.length == 0 ? <CarritoDeProductoVacio /> :

                    <>
                        <ListaDeProductosACobrar
                            seleccionarProducto={seleccionarProducto}
                            listaProducto={listaProducto}
                            ultimoSeleccionado={ultimoSeleccionado}
                        />


                        <TotalPrecioProductos />


                    </>

                }
            </SuspenseLoading>

        </Container>

    )
})
