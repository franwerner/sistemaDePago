import { useCallback, useContext, useReducer } from "react";
import { TarifaContex } from "@/context/Contextos";
import { seleccionarUltimoElementoDeUnArray } from "@/helper/seleccionarUltimoElementoDeUnArray";
import { verificarSiEsNegativo } from "@/helper/verificarSiEsNegativo";
import { establecerLargoMaximo } from "@/helper/establecerLargoMaximo";

const filtrarMetodosDePago = (state, id) => {
    return [...state.metodosDePago.filter(item => item.id !== id)]
}


const modificacionDelMetodoDePago = (state, pago) => {

    const { comma, tipoDeButton } = pago

    const copiaUltimoSeleccionado = { ...state.ultimoSeleccionado }

    const copiaMetodosDePago = [...state.metodosDePago]

    const { resto, id } = copiaUltimoSeleccionado

    const restoStringEntero = parseInt(resto).toString()

    const restoStringDecimales = (resto % 1).toFixed(2)


    if (tipoDeButton == "Backspace" && comma == false) {

        const verificacion = verificarSiEsNegativo(resto)

        const largo = verificacion == "Negativo" ? 2 : 1

        const cero = verificacion == "Negativo" ? (-0) : 0

        const verificarLargo = restoStringEntero.length == largo ?
            cero :
            parseFloat(restoStringEntero.slice(0, restoStringEntero.length - 1))

        copiaUltimoSeleccionado.resto = isNaN(verificarLargo) ? cero : verificarLargo + parseFloat(restoStringDecimales)


    } else if (tipoDeButton == "-") {

        const resultado = verificarSiEsNegativo(resto) == "Negativo" ? resto : (-resto)

        copiaUltimoSeleccionado.resto = resultado

    }
    else if (tipoDeButton == "+") {

        copiaUltimoSeleccionado.resto = Math.abs(resto)

    }
    else if (comma && tipoDeButton == "Backspace") {

        copiaUltimoSeleccionado.resto = parseInt(restoStringEntero)
    }

    else if (comma && !isNaN(tipoDeButton)) {

        const index = restoStringDecimales.indexOf(".")

        const alcance = index == 1 ? 3 : 4


        const numero = restoStringDecimales.slice(index + 1, alcance)

        const decimales = `0.${restoStringDecimales == 0 ? tipoDeButton : numero + tipoDeButton}`

        const numeroPositivo = Math.abs(restoStringEntero) + parseFloat(decimales)

        const resultado = verificarSiEsNegativo(restoStringEntero) == "Negativo"
            ? -(numeroPositivo)
            : numeroPositivo;

        copiaUltimoSeleccionado.resto = resultado

    }

    else if (!isNaN(tipoDeButton)) {

        const MAX_LONGITUD = 15

        const sumaDeStrings = Math.abs(parseFloat(restoStringEntero + tipoDeButton))

        const resultado = verificarSiEsNegativo(resto) == "Negativo" ? (-sumaDeStrings) : sumaDeStrings

        const largoMaximo =
            establecerLargoMaximo({
                numero: resultado,
                max: MAX_LONGITUD
            })

        copiaUltimoSeleccionado.resto = largoMaximo + parseFloat(restoStringDecimales)

    }

    const indice = state.metodosDePago.findIndex(item => item.id == id)

    copiaMetodosDePago.splice(indice, 1, copiaUltimoSeleccionado)

    return {
        ultimoSeleccionado: copiaUltimoSeleccionado,
        metodosDePago: copiaMetodosDePago
    }

}

const reducer = (state, action) => {


    const { pago, type, tipoDeTarifa } = action


    const configIncial = {
        ultimoSeleccionado: pago,
        metodosDePago: [pago]
    }

    const pagoActual = () => {

        if (state[tipoDeTarifa] == undefined) return configIncial

        switch (type) {

            case "Agregar":
                return {
                    metodosDePago: [...state[tipoDeTarifa].metodosDePago, { ...pago }],
                    ultimoSeleccionado: pago
                }

            case "Modificar":

                const { ultimoSeleccionado, metodosDePago } = modificacionDelMetodoDePago(state[tipoDeTarifa], pago)

                return {
                    ultimoSeleccionado,
                    metodosDePago
                }

            case "Eliminar":

                const filtrado = filtrarMetodosDePago(state[tipoDeTarifa], pago.id)
                return {
                    metodosDePago: filtrado,
                    ultimoSeleccionado: seleccionarUltimoElementoDeUnArray(filtrado)
                }

            case "Seleccionar":
                return {
                    ...state[tipoDeTarifa],
                    ultimoSeleccionado: pago
                }

            default: undefined

        }
    }

    return { ...state, [tipoDeTarifa]: { ...pagoActual() } }
}


export const useMetodoDePagoReducer = () => {

    const [listaDePagos, dispatch] = useReducer(reducer, {})

    const { tarifaActual } = useContext(TarifaContex)

    const { tipoDeTarifa } = tarifaActual

    const pagoEncontrado = listaDePagos[tipoDeTarifa]

    const pagoActual = !pagoEncontrado ? { metodosDePago: [] } : pagoEncontrado


    const agregarResto = useCallback((pago) => {
        dispatch({ type: "Agregar", pago, tipoDeTarifa })
    }, [tipoDeTarifa])

    const modificarResto = useCallback((pago) => {
        if (pagoEncontrado == undefined || pagoEncontrado.metodosDePago.length == 0) return

        dispatch({ type: "Modificar", pago, tipoDeTarifa })

    }, [tipoDeTarifa, pagoActual.metodosDePago.length])

    const eliminarResto = useCallback((pago) => {
        dispatch({ type: "Eliminar", pago, tipoDeTarifa })
    }, [tipoDeTarifa, pagoActual.metodosDePago.length])

    const seleccionarElemento = useCallback((pago) => {
        dispatch({ type: "Seleccionar", pago, tipoDeTarifa })
    }, [tipoDeTarifa, pagoActual.metodosDePago.length])


    return {
        pagoActual,
        agregarResto,
        modificarResto,
        eliminarResto,
        seleccionarElemento,

    }

};