import React, { useContext } from "react"
import { productoReducerContext } from "@/context/Contextos"

export const BotonBorrarProducto = React.memo(({ borrarSeleccion,seleccion}) => {


    const { borrarProducto } = useContext(productoReducerContext)

    const onClick = () => {
        borrarProducto(seleccion)
        borrarSeleccion()
    }

    return (
        <>
            <span onClick={onClick}>
                <i className="fa-solid fa-trash"></i>
            </span>

        </>
    )

})