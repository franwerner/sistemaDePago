import { useCallback, useReducer } from "react";

const validarProductoExistente = (state, action) => {

    const productoExistente = state.some(({ id }) => id == action.producto.id)

    return productoExistente
}

const reducer = (state, action) => {

    const { type, producto } = action
    if (action.type == "BORRAR LISTADO") return []

    if (validarProductoExistente(state, action) == false) return [...state, producto];

    return state.map(estado => {

        if (estado.id !== action.producto.id) return estado

        switch (type) {
            case "Cantidad":
                return {
                    ...estado,
                    cantidad: Math.abs(producto.cantidad)
                }
            case "Vencimiento":
                return {
                    ...estado,
                    vencimiento: producto.vencimiento
                }
            case "Fabricacion":
                return {
                    ...estado,
                    fabricacion: producto.fabricacion
                }
            case "Eliminar":
                return null
        }

    }).filter(item => item !== null)
}


export const useInventarioReducer = () => {

    const [listaDeProductos, dispatch] = useReducer(reducer, [])

    const agregarProducto = useCallback((producto) => {
        dispatch({ type: "Agregar", producto })
    }, [])

    const modificarCantidad = useCallback((producto) => {
        dispatch({ type: "Cantidad", producto })
    }, [])

    const modificarVencimiento = useCallback((producto) => {
        dispatch({ type: "Vencimiento", producto })
    }, [])

    const modificarFabricacion = useCallback((producto) => {
        dispatch({ type: "Fabricacion", producto })
    }, [])

    const eliminarProducto = useCallback((producto) => {

        dispatch({ type: "Eliminar", producto })
    }, [])

    return {
        listaDeProductos,
        agregarProducto,
        modificarCantidad,
        modificarFabricacion,
        modificarVencimiento,
        eliminarProducto
    }
};