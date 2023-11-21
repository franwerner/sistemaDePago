import { splitDeRutasUtils } from "./splitDeRutasUtils"

export const concatenacionDeRutasUtils = (posicion) => {

    const rutas = splitDeRutasUtils()

    let rutaNueva = ""

    for (let i = 0; i < rutas.length; i++) {
        if (i > posicion) break
        rutaNueva += `/${rutas[i]}`
    }

    return rutaNueva
}
