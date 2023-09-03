import React, { useContext } from "react"
import { useSeleccionProducto } from "../../hooks/useSeleccionProducto"
import { productoReducerContext, productoSeleccionadoContext } from "../Contextos"


export const ProductoSeleccionadoProvider = ({ children }) => {


    const { listaProducto } = useContext(productoReducerContext)

    const seleccionado = useSeleccionProducto(listaProducto)

    //BORRAR ESTE PROVIDER

    return (
        <productoSeleccionadoContext.Provider value={{ ...seleccionado }}>
            {children}
        </productoSeleccionadoContext.Provider>
    )
}