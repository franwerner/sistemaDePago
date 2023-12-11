import { useCallback } from "react";

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

export const useAlgoritmoDeOrden = (parametros = "") => {

    const dependenciaArray = Object.values(parametros)

    const entries = Object.entries(parametros)

    const iniciarSort = useCallback((array = []) => {

        return [...array].sort((a, b) => {

            for (let i = 0; i < entries.length; i++) { //Este enfoque hace que se ejecute en orden segun el indice del array de las prioridades

                const prop = entries[i][0]

                const buscarItem = (indice) => Object.entries(indice).find(([key]) => key.toLocaleLowerCase() == prop)[1]

                const itemA = buscarItem(a)

                const itemB = buscarItem(b)

                const parametrosActual = parametros[prop] ? parametros[prop] : {}

                const comparacion = parametrosActual.estado == "<" ? ordernAscendente(itemA, itemB) : parametrosActual.estado == ">" && ordenDescendente(itemA, itemB);

                if (comparacion !== 0) {//Esto sirve para que detenga todo el bucle en caso de que encuentre un valor diferente a 0, entonces la prioridad acutal se mantiene intacta
                    return comparacion;
                }
            }

        });

    }, [JSON.stringify(dependenciaArray)])

    return {
        iniciarSort
    }
};