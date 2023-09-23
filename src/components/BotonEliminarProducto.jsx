import React, { useContext } from "react"
import { productoReducerContext } from "@/context/Contextos"


export const BotonEliminarProducto = React.memo(({seleccion}) => {

    const { eliminarProducto } = useContext(productoReducerContext)
    

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
