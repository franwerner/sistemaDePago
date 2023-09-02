import { useCallback, useReducer } from "react";



const validarMetodoIncial = (state, action) => {

    const metodoExistente = state.some(({ tipoDePago }) => tipoDePago == action.metodoDePago.tipoDePago)

    return metodoExistente

}

const buscarMetodosDePagoExistentes = (estado, listaDeMetodos) => {

    return estado.listaDeMetodos.find(item => item.nombre === listaDeMetodos[0].nombre);
}

const sumarRestaDelMetodoExisten = (estado = {}, listaDeMetodos = []) => {

    const { nombre, resto = 0 } = listaDeMetodos[0]

    const metodoExistente = buscarMetodosDePagoExistentes(estado, listaDeMetodos)

    const metodos = estado.listaDeMetodos.map(item => {

        if (item.nombre === nombre) {

            return {
                nombre,
                "resto": resto + item.resto
            };

        } else {

            return item;
        }

    });


    return metodoExistente ? metodos : [...estado.listaDeMetodos, listaDeMetodos[0]]



}

const reducer = (state, action) => {

    if (validarMetodoIncial(state, action) == false) return [...state, { ...action.metodoDePago }]

    const { metodoDePago, type } = action

    const { tipoDePago, listaDeMetodos } = metodoDePago




    return state.map(estado => {



        if (estado.tipoDePago !== action.metodoDePago.tipoDePago) return estado

        switch (type) {

            case "Agregar":
                return {
                    tipoDePago,
                    listaDeMetodos: sumarRestaDelMetodoExisten(estado, listaDeMetodos)
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
        // console.log(metodoDePago)
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