import { useCallback, useContext, useReducer } from "react";
import { TarifaContex } from "@/context/Contextos";
import { useSumarMetodosDePagoAgregados } from "./useSumarMetodosDePagoAgregados"


const moficiarResto = (state, pago) => {


    return state.metodosDePago.map(item => {
        if (item.id == pago.id) return { ...item, resto: pago.resto }
        else return item
    })
}

const filtrarMetodosDePago = (state, id) => {

    return [...state.metodosDePago.filter(item => item.id !== id)]
}

const reducer = (state, action) => {

    const { pago, type, tipoDeTarifa } = action

    const configIncial = {
        metodosDePago: [pago]
    }

    const pagoActual = () => {

        if (state[tipoDeTarifa] == undefined) return configIncial

        switch (type) {

            case "Agregar":
                return {
                    metodosDePago: [...state[tipoDeTarifa].metodosDePago, { ...pago }],

                }

            case "Modificar":

                const metodosDePago = moficiarResto(state[tipoDeTarifa], pago)
                console.log(metodosDePago)
                return {
                    metodosDePago
                }

            case "Eliminar":

                const filtrado = filtrarMetodosDePago(state[tipoDeTarifa], pago.id)
                return {
                    metodosDePago: filtrado,
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

    const ajustePagoEncontrado = useSumarMetodosDePagoAgregados({ pagoEncontrado })

    const pagoActual = !pagoEncontrado ? { metodosDePago: [] } : { ...pagoEncontrado, metodosDePago: ajustePagoEncontrado }

    const dependenciaCallback = [tipoDeTarifa, pagoActual.metodosDePago.length]

    const agregarResto = useCallback((pago) => {
        dispatch({ type: "Agregar", pago, tipoDeTarifa })
    }, [tipoDeTarifa])

    const modificarResto = useCallback((pago) => {

        if (pagoEncontrado == undefined || pagoEncontrado.metodosDePago.length == 0) return

        dispatch({ type: "Modificar", pago, tipoDeTarifa })

    }, dependenciaCallback)

    const eliminarResto = useCallback((pago) => {

        dispatch({ type: "Eliminar", pago, tipoDeTarifa })
    }, dependenciaCallback)

    const restablecerPagos = useCallback((pago) => {

        dispatch({ type: "Restablecer", pago, tipoDeTarifa })

    }, dependenciaCallback)


    return {
        pagoActual,
        listaDePagos,
        agregarResto,
        modificarResto,
        eliminarResto,
        restablecerPagos
    }

};