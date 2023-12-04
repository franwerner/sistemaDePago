import { useCallback, useContext, useReducer } from "react";
import { TarifaContex } from "@/context/Contextos";


const verificarSiExiste = (state, pago) => {

    const verificar = state.metodosDePago.some(item => item.id == pago.id)

    return verificar

}


const modificiarResto = (state, pago) => {


    return state.metodosDePago.map(item => {
        if (item.id == pago.id) return { ...item, resto: pago.resto }
        else return item
    })

}

const reducer = (state, action) => {

    const { pago, type, tipoDeTarifa } = action

    const configIncial = {
        metodosDePago: [pago]
    }

    const pagoActual = () => {

        if (state[tipoDeTarifa] == undefined) return configIncial


        switch (type) {

            case "Modificar":

                const verificar = verificarSiExiste(state[tipoDeTarifa], pago)

                const metodosDePago = verificar ? modificiarResto(state[tipoDeTarifa], pago) : [...state[tipoDeTarifa].metodosDePago, pago]

                return {
                    metodosDePago
                }

            case "Eliminar": {

                return { metodosDePago: state[tipoDeTarifa].metodosDePago.filter(item => item.id !== pago.id) }
            }

            case "Restablecer":

                return {
                    metodosDePago: []
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

    const eliminarResto = useCallback((pago) => {
        dispatch({ type: "Eliminar", pago, tipoDeTarifa })
    }, [tipoDeTarifa])

    const modificarResto = useCallback((pago) => {

        dispatch({ type: "Modificar", pago, tipoDeTarifa })

    }, [tipoDeTarifa])

    const restablecerPagos = useCallback((pago) => {

        dispatch({ type: "Restablecer", pago, tipoDeTarifa })

    }, [tipoDeTarifa])


    return {
        pagoActual: pagoActual.metodosDePago,
        listaDePagos,
        eliminarResto,
        agregarResto,
        modificarResto,
        restablecerPagos,
    }
}