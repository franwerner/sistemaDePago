import { useCallback, useReducer } from "react";



const validarTarifaDelMetodoInicial = (state, action) => state.some(({ tipoDeTarifa }) => tipoDeTarifa == action.metodoDePago.tipoDeTarifa)




const buscarMetodosDePagoExistentes = (estado, listaDeMetodos) => estado.listaDeMetodos.some(item => item.nombre === listaDeMetodos[0].nombre);


const sumarRestaDelMetodo = (estado = {}, listaDeMetodos = []) => {

    const { nombre, resto = 0 } = listaDeMetodos[0]

    const metodoExistente = buscarMetodosDePagoExistentes(estado, listaDeMetodos)

    const metodos = estado.listaDeMetodos.map(item => {

        const objNuevo = { nombre, "resto": resto + item.resto }

        return item.nombre === nombre ? objNuevo : item //Esto si el metodo existe y necesito verificar si es ese el que aprete para sumarle el resto

    })

    return metodoExistente ? metodos : [...estado.listaDeMetodos, listaDeMetodos[0]] //Esto solo se retorna si el metodo de pago es nuevo



}

const reducer = (state, action) => {

    if (validarTarifaDelMetodoInicial(state, action) == false) return [...state, { ...action.metodoDePago }]

    const { metodoDePago, type } = action

    const { tipoDeTarifa, listaDeMetodos } = metodoDePago


    return state.map(estado => {



        if (estado.tipoDeTarifa !== action.metodoDePago.tipoDeTarifa) return estado

        switch (type) {

            case "Agregar":
                return {
                    tipoDeTarifa,
                    listaDeMetodos: sumarRestaDelMetodo(estado, listaDeMetodos)
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