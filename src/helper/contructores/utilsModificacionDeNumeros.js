import { establecerLargoMaximo } from "../establecerLargoMaximo"
import { obtenerDecimales } from "../obtenerDecimales"
import { verificarSiEsNegativo } from "../verificarSiEsNegativo"


export class UtilsModificacionDeNumeros {
    constructor(resto, tipo) {
        this.resto = resto
        this.tipo = tipo
    }

    convertirStringEntero() {
        return parseInt(this.resto).toString()

    }

    convertirStringDecimal() {
        return obtenerDecimales(this.resto).toString()
    }

    verificarSiRestoEsNegativo = (numero) => {

        const numeroPositivo = Math.abs(numero)

        return verificarSiEsNegativo(this.resto) ? -(numeroPositivo) : numeroPositivo
    }

    borrarEnteros = () => {
        const restoStringEntero = this.convertirStringEntero()

        const restoStringDecimales = this.convertirStringDecimal()

        const restoStringLargo = parseFloat(restoStringEntero.slice(0, restoStringEntero.length - 1))

        const verificarSiEsNaN = isNaN(restoStringLargo) ? "0" : restoStringLargo

        const agregarPuntoDecimal = `.${restoStringDecimales}`

        const resultado = this.verificarSiRestoEsNegativo(verificarSiEsNaN + agregarPuntoDecimal)

        return parseFloat(resultado)

    }

    borrarDecimales = () => {

        const restoStringEntero = this.convertirStringEntero()

        const restoStringDecimales = this.convertirStringDecimal()

        const decimalStringLargo = parseFloat(restoStringDecimales.slice(0, restoStringDecimales.length - 1))

        const verificarSiEsNaN = isNaN(decimalStringLargo) ? "0" : decimalStringLargo

        const agregarPuntoDecimal = `.${"0" + verificarSiEsNaN}`

        const resultado = this.verificarSiRestoEsNegativo(restoStringEntero + agregarPuntoDecimal)

        return parseFloat(resultado)

    }

    agregarNumeros = () => {

        const restoStringEntero = this.convertirStringEntero()

        const restoStringDecimales = this.convertirStringDecimal()

        const MAX_LONGITUD = 15

        const agregarPuntoDecimal = `.${restoStringDecimales}`

        const sumaDeStrings = parseFloat(restoStringEntero + this.tipo)

        const resultado = this.verificarSiRestoEsNegativo(sumaDeStrings)

        const largoMaximo =
            establecerLargoMaximo({
                numero: resultado,
                max: MAX_LONGITUD
            })

        return parseFloat(largoMaximo + agregarPuntoDecimal)

    }

    agregarDecimales = () => {

        const restoStringEntero = this.convertirStringEntero()

        const restoStringDecimales = this.convertirStringDecimal()

        const verificarSiEsCero = restoStringDecimales == "0" ? restoStringDecimales.slice(0, 1) : restoStringDecimales

        const suma = verificarSiEsCero + this.tipo

        const verificarLargo = restoStringDecimales.length >= 2 ? restoStringDecimales : suma

        const agregarPuntoDecimal = `.${verificarLargo}`

        const numero = parseFloat(restoStringEntero) + agregarPuntoDecimal

        return this.verificarSiRestoEsNegativo(numero)
    }

    sumarNumeros = ({ numero }) => {

        const suma = this.resto + numero

        return this.verificarSiRestoEsNegativo(suma)
    }

}