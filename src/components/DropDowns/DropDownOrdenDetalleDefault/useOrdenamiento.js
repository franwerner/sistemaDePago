import { useCallback, useState } from "react";

export const useOrdenamiento = () => {

    const [orden, setOrden] = useState({})

    const establecerOrden = useCallback((nombre, prioridad) => {

        setOrden(prev => {

            const buscarParametro = prev[nombre] ? prev[nombre] : {}

            const estadoActual = buscarParametro.estado == "<" ? ">" : "<"

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

    const ordenarPrioridad = (parametros) => {

            const prioridades =  Object.entries(parametros).sort(([_, valueA], [__, valueB]) => {

                return valueA.prioridad - valueB.prioridad
            })
        return Object.fromEntries(prioridades)
    }

    const reestablecerOrdenes = useCallback(() => {
        setOrden({})
    },[])

    return {
        establecerOrden,
        orden: ordenarPrioridad(orden),
        removerOrden,
        reestablecerOrdenes
    }

};