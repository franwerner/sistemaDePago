import React, { useContext } from "react"
import { productoReducerContext, productoSeleccionadoContext } from "../../context/Contextos"

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