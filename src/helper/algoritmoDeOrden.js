import { useSearchQuery } from "../hooks/useSearchQuery"

export const algoritmoDeOrden = (array = []) => {

    const mapeoPropiedades = {
        "Monto ↑": "monto",
        "Monto ↓": "monto",
        "Hora": "hora",
        "Orden": "orden"
    }

    const { parametros } = useSearchQuery() //Esto es igual a MontoMayor

    const ordenarMayor = (a, b, propiedad) => {
        return b[propiedad] - a[propiedad]
    }

    const ordenarMenor = (a, b, propiedad) => {
        return a[propiedad] - b[propiedad]
    }

    const lista = Object.entries(parametros).reduce((acc, [key, value]) => {
        if (!mapeoPropiedades[key]) return acc
        return { ...acc, [mapeoPropiedades[key]]: value }
    }, {})

    const propiedadesLista = Object.keys(lista);

    array.sort((a, b) => {

        const valoresA = propiedadesLista.map(prop => a[prop]);
        const valoresB = propiedadesLista.map(prop => b[prop]);


        for (let i = 0; i < propiedadesLista.length; i++) {
            const prop = propiedadesLista[i];
            const valorA = valoresA[i];
            const valorB = valoresB[i];

            if (valorA !== valorB) {
                return lista[prop] === '>' ? ordenarMayor(a, b, prop) : ordenarMenor(a, b, prop);
            }
        }

        return 0
    });

    console.log(array)


}