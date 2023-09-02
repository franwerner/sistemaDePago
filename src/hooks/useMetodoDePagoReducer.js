import { useCallback, useReducer } from "react";



const validarMetodoIncial = (state, action) => {

    const metodoExistente = state.some(({ tipoDePago }) => tipoDePago == action.metodoDePago.tipoDePago)

    return metodoExistente

}


const reducer = (state, action) => {


    if (validarMetodoIncial(state, action) == false) return [...state, { ...action.metodoDePago }]


    return state.map(estado => {


        if (estado.tipoDePago !== action.metodoDePago.tipoDePago) return estado



        switch (action.type) {

            case "Agregar":
                return {
                    ...action.metodoDePago,
                }

            case "Modificar":
                return {

                }

            case "Eliminar":
                return {
                    ...action.metodoDePago,
                    "resto": 0,
                }

        }
    })

}




export const useMetodoDePagoReducer = () => {

    const [restoDelPago, dispatch] = useReducer(reducer, [])


    const agregarResto = useCallback((metodoDePago) => {

        dispatch({ type: "Agregar", metodoDePago })
    }, [])

    const modificarResto = useCallback((metodoDePago) => {
        dispatch({ type: "Modificar", metodoDePago })
    }, [])

    const eliminarResto = useCallback((metodoDePago) => {

        dispatch({ type: "Eliminar", metodoDePago })
    }, [])



    return {
        restoDelPago,
        agregarResto,
        modificarResto,
        eliminarResto
    }

};