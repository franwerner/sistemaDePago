import { useCallback, useState } from "react";

export const useOrdenamiento = () => {

    const [orden, setOrden] = useState({})

    const establecerOrden = useCallback(({ target }) => {

        const nombre = target.dataset.name.toLowerCase()

        const prioridad = target.dataset.prioridad

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

    return {
        establecerOrden,
        orden
    }

};