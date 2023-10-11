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

const sumarNumeros = ({ numero, verificarSiRestoEsNegativo, resto }) => {

    const suma = resto + numero

    return verificarSiRestoEsNegativo(suma)
}

export const switchDefault = (resto, btn) => {

    const { comma, tipoDeButton } = btn

    const buscarSignoMas = tipoDeButton.indexOf("+")

    const restoStringEntero = parseInt(resto).toString()

    const restoStringDecimales = obtenerDecimales(resto).toString()

    const verificarSiRestoEsNegativo = (numero) => {

        const numeroPositivo = Math.abs(numero)

        return verificarSiEsNegativo(resto) ? -(numeroPositivo) : numeroPositivo
    }

    switch (tipoDeButton) {

        case "Backspace":

            if (comma == false) {

                return borrarEnteros({ restoStringEntero, verificarSiRestoEsNegativo, restoStringDecimales })

            } else {
                return borrarDecimales({ restoStringEntero, verificarSiRestoEsNegativo, restoStringDecimales })
            }

        case "-":

            return verificarSiEsNegativo(resto) ? resto : (-resto)

        case "+":

            return Math.abs(resto)

        case buscarSignoMas == -1 && tipoDeButton <= 9 && tipoDeButton:
            if (comma) {
                return agregarDecimales({ restoStringDecimales, verificarSiRestoEsNegativo, restoStringEntero, tipoDeButton })
            } else {
                return agregarNumeros({ restoStringDecimales, verificarSiRestoEsNegativo, restoStringEntero, tipoDeButton })
            }

        case buscarSignoMas == 0 && tipoDeButton:

            const numero = parseFloat(tipoDeButton.slice(1))

            return sumarNumeros({ verificarSiRestoEsNegativo, numero, resto })

        default:
            return resto
    }

}

