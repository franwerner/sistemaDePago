import { useCallback, useContext, useReducer } from "react";
import { TarifaContex } from "@/context/Contextos";
import { seleccionarUltimoElementoDeUnArray } from "@/helper/seleccionarUltimoElementoDeUnArray";
import { switchModificacionMetodosDePago } from "@/helper/switchModificacionMetodosDePago";

const filtrarMetodosDePago = (state, id) => {
    return [...state.metodosDePago.filter(item => item.id !== id)]
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

                const { ultimoSeleccionado, metodosDePago } = switchModificacionMetodosDePago(state[tipoDeTarifa], pago)

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