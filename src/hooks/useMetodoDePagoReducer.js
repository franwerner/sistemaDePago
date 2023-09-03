import { useCallback, useReducer } from "react";



const validarTarifaDelMetodoInicial = (state, tipoDeTarifa) => state.some(i => {
    return i.tipoDeTarifa == tipoDeTarifa
})


const reemplazarRestoDelMetodo = (estado, metodo) => {
    
    const elementoDeLaListaFiltrado = estado.metodosDePago.filter(item => item.nombre !== metodo[0].nombre);
    return [...elementoDeLaListaFiltrado, ...metodo]
}

const eliminarRestoDelMetodo = (estado, metodo) => {

    return [...estado.metodosDePago.filter(({ nombre }) => nombre !== metodo[0].nombre)]

}




const reducer = (state, action) => {

    const { metodoDePago, type } = action

    const { tipoDeTarifa, metodosDePago } = metodoDePago


    if (validarTarifaDelMetodoInicial(state, tipoDeTarifa) == false) return [...state, { ...action.metodoDePago }]

    return state.map(estado => {

        if (estado.tipoDeTarifa !== action.metodoDePago.tipoDeTarifa) return estado

        switch (type) {

            case "Agregar":
                return {
                    tipoDeTarifa,
                    metodosDePago: reemplazarRestoDelMetodo(estado, metodosDePago)
                }

            case "Modificar":
                return {

                }

            case "Eliminar":
                return {
                    tipoDeTarifa,
                    metodosDePago: eliminarRestoDelMetodo(estado, metodosDePago)
                }

        }
    })

}




export const useMetodoDePagoReducer = () => {

    const [listaDeRestos, dispatch] = useReducer(reducer, [])


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
        listaDeRestos,
        agregarResto,
        modificarResto,
        eliminarResto
    }

};