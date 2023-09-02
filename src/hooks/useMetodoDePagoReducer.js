import { useCallback, useReducer } from "react";



const validarTarifaDelMetodoInicial = (state, tipoDeTarifa) => state.some(i => {
    return i.tipoDeTarifa == tipoDeTarifa
})


const reemplazarRestoDelMetodo = (estado, metodo) => {

    const elementoDeLaListaFiltrado = estado.listaDeMetodos.filter(item => item.nombre !== metodo[0].nombre);

    console.log(elementoDeLaListaFiltrado)

    return [...elementoDeLaListaFiltrado, ...metodo]
}

const eliminarRestoDelMetodo = (estado, metodo) => {

    const test = estado.listaDeMetodos.filter(({ nombre }) => nombre !== metodo[0].nombre)

    // console.log(test)
    return [...test]
}




const reducer = (state, action) => {

    const { metodoDePago, type } = action

    const { tipoDeTarifa, listaDeMetodos } = metodoDePago


    if (validarTarifaDelMetodoInicial(state, tipoDeTarifa) == false) return [...state, { ...action.metodoDePago }]

    return state.map(estado => {


        if (estado.tipoDeTarifa !== action.metodoDePago.tipoDeTarifa) return estado

        switch (type) {

            case "Agregar":
                return {
                    tipoDeTarifa,
                    listaDeMetodos: reemplazarRestoDelMetodo(estado, listaDeMetodos)
                }

            case "Modificar":
                return {

                }

            case "Eliminar":
                return {
                    tipoDeTarifa,
                    listaDeMetodos: eliminarRestoDelMetodo(estado, listaDeMetodos)
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