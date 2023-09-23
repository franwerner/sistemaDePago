
import { useState, useCallback } from "react"

export const useSeleccionarElemento = () => {



    const [seleccion, setSeleccion] = useState({})


    const seleccionarElemento = useCallback((elemento) => {

        setSeleccion(elemento)

    }, [])

    const borrarSeleccion = useCallback(() => {

        setSeleccion({})

    }, [])



    return {
        seleccion,
        seleccionarElemento,
        borrarSeleccion
    }
}