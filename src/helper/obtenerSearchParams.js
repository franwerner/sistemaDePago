

export const obtenerSearchParams = (search) => {

    const posicion = search.indexOf("=")

    return search.slice(posicion + 1)


};