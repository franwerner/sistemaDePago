import { useCallback, useReducer } from "react";

const validarProductoExistente = (state, action) => {

    const productoExistente = state.some(({ id }) => id == action.producto.id)

    return productoExistente

}

const reducer = (state, action) => {

    if (action.type == "BORRAR LISTADO") return []

    if (validarProductoExistente(state, action) == false) return [...state, producto];

    const { type, producto } = action

    return state.map(estado => {

        if (estado.id !== action.producto.id) return estado

        switch (type) {
            case "Agregar":
                return {
                    ...producto
                }
        }

    })

}

export const useInventarioReducer = () => {

    const [listaDeProductos, dispatch] = useReducer(reducer, [])

    const agregarProducto = useCallback((producto) => {
        dispatch({ type: "Agregar", producto })
    }, [])

    return {
        listaDeProductos,
        agregarProducto
    }
};