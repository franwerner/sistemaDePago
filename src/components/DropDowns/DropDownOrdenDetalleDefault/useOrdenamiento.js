import { useCallback, useState } from "react";

export const useOrdenamiento = () => {

    const [orden, setOrden] = useState({})

    const establecerOrden = useCallback((nombre, prioridad) => {

        setOrden(prev => {

            const buscarParametro = prev[nombre] ? prev[nombre] : {}

            const estadoActual = buscarParametro.estado == ">" ? "<" : ">"

            return {
                ...prev, [nombre]: {
                    prioridad,
                    estado: estadoActual
                }
            }
        })

    }, [])

    const removerOrden = useCallback((nombre) => {

        setOrden(prev => {
            const resultado = Object.entries(prev).filter(([a, b]) => a !== nombre)
            return Object.fromEntries(resultado)
        })

    }, [])

    return {
        establecerOrden,
        orden,
        removerOrden
    }

};