import { useCallback } from "react";



const Orden = (item1 = "", item2 = "") => {

    if (isNaN(item1) || isNaN(item2)) {
        return item1.localeCompare(item2)
    }

    if (item1 > item2) return 1
    else if (item1 < item2) return -1
    else return 0
}

export const useAlgoritmoDeOrden = (parametros = {}) => {

    const dependenciaArray = Object.values(parametros)

    const entriesParametros = Object.entries(parametros)

    const iniciarSort = useCallback((array = []) => {

        return [...array].sort((a, b) => {

            for (let i = 0; i < entriesParametros.length; i++) { //Este enfoque hace que se ejecute en orden segun la prioridad  establecida.

                const prop = entriesParametros[i][0]

                const buscarItem = (indice) => Object.entries(indice).find(([key]) => key.toLocaleLowerCase() == prop)[1]

                const itemA = buscarItem(a)

                const itemB = buscarItem(b)

                const parametrosActual = parametros[prop] ? parametros[prop] : {}

                const comparacion = parametrosActual.estado == "<" ? Orden(itemB, itemA) : parametrosActual.estado == ">" && Orden(itemA, itemB);

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