import React, { useContext } from "react"
import { productoReducerContext, productoSeleccionadoContext } from "../../context/Contextos"


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
