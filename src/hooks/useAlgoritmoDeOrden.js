import { useCallback, useMemo } from "react";

export const useAlgoritmoDeOrden = (parametros = "") => {

    const dependenciaPrioridad = Object.keys(parametros)

    const dependenciaArray = Object.values(parametros)


    const organizarPrioridad = useMemo(() => {

        return Object.entries(parametros).sort(([_, valueA], [__, valueB]) => {

            const regExpN = /\d+/g

            const prioridadB = valueB.match(regExpN)

            const prioridadA = valueA.match(regExpN)

            return (prioridadA ? prioridadA[0] : 0) - (prioridadB ? prioridadB[0] : 0)
        })

    }, [dependenciaPrioridad.toString()])


    const ordernAscendente = (a = "", b = "") => {
        if (isNaN(a) || isNaN(b)) {
            return b.localeCompare(a)
        }

        return b - a
    }

    const ordenDescendente = (a = "", b = "") => {

        if (isNaN(a) || isNaN(b)) {
            return a.localeCompare(b)
        }

        return a - b
    }
    const iniciarSort = useCallback((array = []) => {

        return [...array].sort((a, b) => {

            for (let i = 0; i < organizarPrioridad.length; i++) { //Este enfoque hace que se ejecute en orden segun el indice del array de las prioridades

                const prop = organizarPrioridad[i][0]

                const buscarItem = (indice) => Object.entries(indice).find(([key]) => key.toLocaleLowerCase() == prop)[1]

                const itemA = buscarItem(a)

                const itemB = buscarItem(b)

                const parametrosActual = parametros[prop] ? parametros[prop] : ""

                const comparacion = parametrosActual.match(">") ? ordernAscendente(itemA, itemB) : ordenDescendente(itemA, itemB);

                if (comparacion !== 0) {//Esto sirve para que detenga todo el bucle en caso de que encuentre un valor diferente a 0, entonces la prioridad acutal se mantiene intacta
                    return comparacion;
                }
            }

        });
    }, [dependenciaArray.toString()])

    return {
        iniciarSort
    }
};