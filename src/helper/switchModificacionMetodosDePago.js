import { establecerLargoMaximo } from "./establecerLargoMaximo"
import { obtenerDecimales } from "./obtenerDecimales"
import { verificarSiEsNegativo } from "./verificarSiEsNegativo"


const borrarEnteros = ({ restoStringEntero, restoStringDecimales, verificarSiRestoEsNegativo }) => {

    const restoStringLargo = parseFloat(restoStringEntero.slice(0, restoStringEntero.length - 1))

    const verificarSiEsNaN = isNaN(restoStringLargo) ? "0" : restoStringLargo

    const agregarPuntoDecimal = `.${restoStringDecimales}`

    const resultado = verificarSiRestoEsNegativo(verificarSiEsNaN + agregarPuntoDecimal)

    return parseFloat(resultado)

}

const borrarDecimales = ({ restoStringEntero, restoStringDecimales, verificarSiRestoEsNegativo }) => {

    const decimalStringLargo = parseFloat(restoStringDecimales.slice(0, restoStringDecimales.length - 1))

    const verificarSiEsNaN = isNaN(decimalStringLargo) ? "0" : decimalStringLargo

    const agregarPuntoDecimal = `.${"0" + verificarSiEsNaN}`

    const resultado = verificarSiRestoEsNegativo(restoStringEntero + agregarPuntoDecimal)

    return parseFloat(resultado)

}

const agregarNumeros = ({ restoStringEntero, tipoDeButton, verificarSiRestoEsNegativo, restoStringDecimales }) => {

    const MAX_LONGITUD = 15

    const agregarPuntoDecimal = `.${restoStringDecimales}`

    const sumaDeStrings = parseFloat(restoStringEntero + tipoDeButton)

    const resultado = verificarSiRestoEsNegativo(sumaDeStrings)

    const largoMaximo =
        establecerLargoMaximo({
            numero: resultado,
            max: MAX_LONGITUD
        })

    return parseFloat(largoMaximo + agregarPuntoDecimal)

}

const agregarDecimales = ({ restoStringDecimales, tipoDeButton, verificarSiRestoEsNegativo, restoStringEntero }) => {

    const verificarSiEsCero = restoStringDecimales == "0" ? restoStringDecimales.slice(0, 1) : restoStringDecimales

    const suma = verificarSiEsCero + tipoDeButton

    const verificarLargo = restoStringDecimales.length >= 2 ? restoStringDecimales : suma

    const agregarPuntoDecimal = `.${verificarLargo}`

    const numero = parseFloat(restoStringEntero) + agregarPuntoDecimal

    return verificarSiRestoEsNegativo(numero)
}

const sumarNumeros = ({ tipoDeButton, verificarSiRestoEsNegativo, resto }) => {

    const suma = resto + tipoDeButton

    return verificarSiRestoEsNegativo(suma)

}


export const switchModificacionMetodosDePago = (state, pago) => {

    const { comma, tipoDeButton } = pago

    const copiaUltimoSeleccionado = { ...state.ultimoSeleccionado }

    const copiaMetodosDePago = [...state.metodosDePago]

    const { resto, id } = copiaUltimoSeleccionado

    const restoStringEntero = parseInt(resto).toString()

    const restoStringDecimales = obtenerDecimales(resto).toString()

    const verificarSiRestoEsNegativo = (numero) => {

        const numeroPositivo = Math.abs(numero)

        return verificarSiEsNegativo(resto) ? -(numeroPositivo) : numeroPositivo

    }

    let resultadoFinal;

    switch (tipoDeButton) {

        case "Backspace":

            if (comma == false) {
                resultadoFinal = borrarEnteros({ restoStringEntero, verificarSiRestoEsNegativo, restoStringDecimales })
            } else {
                resultadoFinal = borrarDecimales({ restoStringEntero, verificarSiRestoEsNegativo, restoStringDecimales })
            }

            break;

        case "-":

            resultadoFinal = verificarSiEsNegativo(resto) ? resto : (-resto)

            break;

        case "+":

            resultadoFinal = Math.abs(resto)

            break

        case tipoDeButton <= 9 && tipoDeButton:

            if (comma) {
                resultadoFinal = agregarDecimales({ restoStringDecimales, verificarSiRestoEsNegativo, restoStringEntero, tipoDeButton })
            } else {
                resultadoFinal = agregarNumeros({ restoStringDecimales, verificarSiRestoEsNegativo, restoStringEntero, tipoDeButton })
            }

            break;

        case tipoDeButton >= 100 && tipoDeButton:

            resultadoFinal = sumarNumeros({ verificarSiRestoEsNegativo, tipoDeButton, resto })

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