import { establecerLargoMaximo } from "./establecerLargoMaximo"
import { obtenerDecimales } from "./obtenerDecimales"
import { verificarSiEsNegativo } from "./verificarSiEsNegativo"


const borrarNumeros = ({ restoStringEntero, restoStringDecimales }) => {

    const restoStringLargo = parseFloat(restoStringEntero.slice(0, restoStringEntero.length - 1))

    const pasearDecimales = parseFloat(restoStringDecimales)

    const verificarSiEsNaN = isNaN(restoStringLargo)

    return verificarSiEsNaN ? 0 + pasearDecimales : restoStringLargo + pasearDecimales

}

const agregarNumeros = ({ restoStringEntero, tipoDeButton, resto, restoStringDecimales }) => {

    const MAX_LONGITUD = 15

    const sumaDeStrings = Math.abs(parseFloat(restoStringEntero + tipoDeButton))

    const verificar = verificarSiEsNegativo(resto) == "Negativo"

    const resultado = verificar ? (-sumaDeStrings) : sumaDeStrings

    const largoMaximo =
        establecerLargoMaximo({
            numero: resultado,
            max: MAX_LONGITUD
        })

    return largoMaximo + parseFloat(restoStringDecimales)

}

const agregarDecimales = ({ restoStringDecimales, tipoDeButton, restoStringEntero }) => {

    const redondeo = Math.round(restoStringDecimales).toString()

    const verificar = verificarSiEsNegativo(restoStringEntero) == "Negativo"

    const verificarSiEsCero = redondeo == "0" ? redondeo.slice(0, 1) : redondeo

    const suma = verificarSiEsCero + tipoDeButton

    const verificarLargo = redondeo.length >= 2 ? redondeo : suma

    const numeroPositivo = parseFloat(Math.abs(restoStringEntero) + "." + verificarLargo)

    return verificar ? -(numeroPositivo) : numeroPositivo;
}

const sumarNumeros = ({ tipoDeButton, resto }) => {

    const numeroPositivo = Math.abs(resto)

    const verificar = verificarSiEsNegativo(resto) == "Negativo"

    const suma = numeroPositivo + tipoDeButton

    return verificar ? -(suma) : suma

}


export const switchModificacionMetodosDePago = (state, pago) => {

    const { comma, tipoDeButton } = pago

    const copiaUltimoSeleccionado = { ...state.ultimoSeleccionado }

    const copiaMetodosDePago = [...state.metodosDePago]

    const { resto, id } = copiaUltimoSeleccionado

    const restoStringEntero = parseInt(resto).toString()

    const restoStringDecimales = obtenerDecimales(resto).toString()

    let resultadoFinal;

    switch (tipoDeButton) {
        case "Backspace":

            if (comma == false) {
                resultadoFinal = borrarNumeros({ restoStringEntero, restoStringDecimales })
            } else {
                resultadoFinal = parseInt(restoStringEntero)
            }

            break;

        case "-":
            resultadoFinal = verificarSiEsNegativo(resto) == "Negativo" ? resto : (-resto)
            break;

        case "+":
            resultadoFinal = Math.abs(resto)
            break

        case tipoDeButton <= 9 && tipoDeButton:

            if (comma) {
                resultadoFinal = agregarDecimales({ restoStringDecimales, restoStringEntero, tipoDeButton })
            } else {
                resultadoFinal = agregarNumeros({ resto, restoStringDecimales, restoStringEntero, tipoDeButton })
            }
            break;

        case tipoDeButton >= 100 && tipoDeButton:
            resultadoFinal = sumarNumeros({ resto, tipoDeButton })
            break;

        default:
            resultadoFinal = resto
    }

    copiaUltimoSeleccionado.resto = resultadoFinal

    const indice = state.metodosDePago.findIndex(item => item.id == id)

    copiaMetodosDePago.splice(indice, 1, copiaUltimoSeleccionado)

    return {
        ultimoSeleccionado: copiaUltimoSeleccionado,
        metodosDePago: copiaMetodosDePago
    }
}

    ;