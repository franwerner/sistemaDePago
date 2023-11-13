
export const algoritmoDeOrden = (listaDePropiedades = [],parametros = {}) => {

    const filtradoDeParametros = Object.entries(parametros).filter(([key, _]) => listaDePropiedades.includes(key))

    const organizarPrioridad = filtradoDeParametros.sort(([__, valueA], [_, valueB]) => {

        const regExpN = /\d+/g

        const prioridadB = valueB.match(regExpN)
        const prioridadA = valueA.match(regExpN)

        return (prioridadA ? prioridadA[0] : 0) - (prioridadB ? prioridadB[0] : 0)
    })

    const parametrosActuales = Object.fromEntries(organizarPrioridad)

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


    const iniciarSort = (array = []) => {

        return [...array].sort((a, b) => {

            for (let i = 0; i < organizarPrioridad.length; i++) { //Este enfoque hace que se ejecute en orden segun el indice del array de las prioridades

                const prop = organizarPrioridad[i][0];

                const itemA = a[prop]
                const itemB = b[prop]


                const comparacion = parametrosActuales[prop].match(">") ? ordernAscendente(itemA, itemB) : ordenDescendente(itemA, itemB);

                if (comparacion !== 0) {
                    return comparacion;
                }
            }

        });
    }

    return {
        iniciarSort
    }



}