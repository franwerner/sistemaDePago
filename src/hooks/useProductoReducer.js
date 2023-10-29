import { useCallback, useReducer } from 'react';

const agregarNuevasPropiedades = (action) => {

    const objectoPorDefecto = {
        "editado": false,
        "cantidad": 1,
        "descuento": 0,
        "precioModificado": action.producto.precio
    }

    return { ...objectoPorDefecto, ...action.producto }
}


const validarProductoExistente = (state, action) => {

    const productoExistente = state.some(({ nombre }) => nombre == action.producto.nombre)

    return productoExistente

}


const reducer = (state, action) => {

    const { producto } = action

    if (action.type == "BORRAR LISTADO") return []

    if (validarProductoExistente(state, action) == false) return [...state, agregarNuevasPropiedades(action)];


    return state.map(estado => {

        if (estado.nombre !== action.producto.nombre) return estado

        switch (action.type) {
            case "AGREGAR":

                return {
                    ...estado,
                    "cantidad": estado.cantidad + 1,
                };

            case "CANTIDAD":
                return {
                    ...estado,
                    "cantidad": producto.cantidad
                }

            case "PRECIO":
                return {
                    ...estado,
                    "precioModificado": producto.precioModificado,
                    "editado": true

                };

            case "DESCUENTO":
                return {
                    ...estado,
                    "descuento": producto.descuento
                }

            case "BORRAR":

                return null


            default:
                return state


        }

    }).filter(estado => estado !== null)

}

export const productoReducer = () => {

    const [listaProducto, dispatch] = useReducer(reducer, [])


    const agregarProducto = useCallback((producto) => {
        dispatch({ type: "AGREGAR", producto })
    }, [])

    const modificarCantidad = useCallback((producto) => {

        dispatch({ type: "CANTIDAD", producto })

    }, [])


    const modificarPrecio = useCallback((producto) => {

        dispatch({ type: "PRECIO", producto })

    }, [])

    const borrarProducto = useCallback((producto) => {
        dispatch({ type: "BORRAR", producto })
    }, [])

    const aplicarDescuento = useCallback((producto) => {
        dispatch({ type: "DESCUENTO", producto })
    }, [])

    const borrarListado = useCallback(() => {
        dispatch({ type: "BORRAR LISTADO" })
    }, [])

    return {
        agregarProducto,
        modificarCantidad,
        listaProducto,
        modificarPrecio,
        borrarProducto,
        aplicarDescuento,
        borrarListado,
    }
}