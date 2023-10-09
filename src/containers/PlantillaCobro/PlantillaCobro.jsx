
import { Container } from "react-bootstrap"
import styles from "@/styles/PlantillaCobro.module.css"
import { useSeleccionarElemento } from "@/hooks//useSeleccionProducto"
import React, { useContext, useEffect, useRef } from "react"
import { productoReducerContext } from "@/context//Contextos"
import { CarritoDeProductoVacio } from "@/components//CarritoDeProductoVacio"
import { ListaDeProductosACobrar } from "./ListaDeProductosACobrar"
import { TotalPrecioProductos } from "@/components//TotalPrecioProductos"



export const PlantillaCobro = React.memo(() => {

    const { borrarSeleccion, seleccion, seleccionarElemento } = useSeleccionarElemento()

    const { listaProducto, eliminarProducto } = useContext(productoReducerContext)

    const referido = useRef(null)

    useEffect(() => {

        if (!referido.current) return

        referido.current.scrollTop = referido.current.scrollHeight;

        const largo = listaProducto.length - 1

        if (listaProducto == 0) {
            seleccionarElemento(listaProducto)
        } else {
            seleccionarElemento(listaProducto[largo])
        }

    }, [listaProducto.length])


    return (
        <section id="seccion-cobro" >
            <Container
                fluid
                ref={referido}
                className={` scrollBarPersonalizada ${styles.contenedorCobroPrincipal}`} >

                {listaProducto.length == 0 ? <CarritoDeProductoVacio /> :

                    <>
                        <ListaDeProductosACobrar
                            seleccion={seleccion}
                            seleccionarElemento={seleccionarElemento}
                            listaProducto={listaProducto}
                            eliminarProducto={eliminarProducto}
                        />

                        <TotalPrecioProductos />

                    </>
                }

            </Container>

        </section>
    )
})
