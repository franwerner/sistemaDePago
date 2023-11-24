import historialDeRutas from "./historialDeRutas";
import bucleJerarquico from "./bucleJerarquico";


const encontrarPuntajeMasAlto = (sistemaDePuntaje) => {
    let sumaActual = 0
    let rutaActual = []

    const bucleRecursivo = (date) => {
        let suma = date[0].puntaje || 0
        for (const key of date) {
            if (key.children) {
                suma += bucleRecursivo(key.children);
            }
        }
        return suma
    }

    for (const iterator of sistemaDePuntaje) {

        const search = bucleRecursivo(iterator)

        const mathMax = Math.max(sumaActual, search)
        if (mathMax > sumaActual) {
            rutaActual = iterator
            sumaActual = mathMax
        }
    }

    return rutaActual

}

const concatenacionRecursiva = (date) => {

    let concatenacion = typeof date[0] == "object" ? date[0].nombre || "" : ""

    for (const iterator of date) {
        if (!iterator.children) return concatenacion
        concatenacion += "/" + concatenacionRecursiva(iterator.children);
    }

    return concatenacion
}

export const algoritmoDeBusquedaPageUtils = () => {

    const sistemaDePuntaje = historialDeRutas
        .map(item => {
            const bucle = bucleJerarquico(item)[0]
            const isArray = Array.isArray(bucle.children) ? bucle.children[0].total : 0
            const puntaje = bucle.puntaje
            const verificarHijo = isArray ? isArray + puntaje : puntaje
            return [{ ...bucle, total: verificarHijo }] //Se suman el valor real del hijo mas cercano y el puntaje de la capa 1
        })

    const rutaActual = encontrarPuntajeMasAlto(sistemaDePuntaje)

    return concatenacionRecursiva(rutaActual)

};
