import React, { useContext, useEffect, useRef } from "react"
import { Container } from "react-bootstrap"
import { productoReducerContext } from "@/context/Contextos"
import { ListaDeProductosACobrar } from "./ListaDeProductosACobrar"
import { TotalPrecioProductos } from "@/components/TotalPrecioProductos"
import { CarritoDeProductoVacio } from "@/components/CarritoDeProductoVacio"


export const PlantillaCobroBody = ({ seleccion, seleccionarElemento }) => {

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
        <>

            <Container fluid ref={referido} className={`flex-grow-1 scrollBarPersonalizada`}>
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
        </>
    )
}