import React, { useContext } from "react"
import { productoReducerContext, productoSeleccionadoContext } from "../context/Contextos"

export const BotonEditarProducto = React.memo(({ alternarMostrar }) => {

    const onClick = (e) => {
        alternarMostrar()
        e.stopPropagation()

    }

    return (
        <>

            <span 
                onClick={onClick} >
                <i className="fa-solid fa-pencil"></i>
            </span>

        </>
    )
})

export const BotonEliminarProducto = React.memo(() => {

    const { eliminarProducto } = useContext(productoReducerContext)
    
    const { seleccion } = useContext(productoSeleccionadoContext)

    const onClick = (e) => {
        eliminarProducto(seleccion)
        e.stopPropagation()
    }

    return (

        <span 
            onClick={onClick}>
            <i className="fa-solid fa-arrow-left"></i>
        </span>

    )
})


export const BotonBorrarProducto = React.memo(() => {

    const { borrarProducto } = useContext(productoReducerContext)

    const { seleccion, borrarSeleccion } = useContext(productoSeleccionadoContext)

    const onClick = () => {
        borrarProducto(seleccion)
        borrarSeleccion()
    }

    return (
        <>
            <span  onClick={onClick}>
                <i className="fa-solid fa-trash"></i>
            </span>

        </>
    )

})