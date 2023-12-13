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

const verificarCantidad = (cantidad, descuento) => {

    return [0, -1].includes(Math.sign(cantidad)) ? 0 : Math.abs(descuento)
}

const verificarNumero = (numero) => isNaN(numero) ? 0 : parseFloat(numero)

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
                    "cantidad": verificarNumero(estado.cantidad) + parseFloat((producto.cantidad).toFixed(2)) || 0,
                };

            case "CANTIDAD":

                return {
                    ...estado,
                    "cantidad": verificarNumero(parseFloat(producto.cantidad * 100) / 100),
                    "descuento": verificarNumero(verificarCantidad(producto.cantidad, estado.descuento)),
                }

            case "PRECIO":
                return {
                    ...estado,
                    "precioModificado": verificarNumero(Math.abs(producto.precioModificado)),
                    "editado": true
                };

            case "DESCUENTO":
                return {
                    ...estado,
                    "descuento": verificarNumero(verificarCantidad(estado.cantidad, producto.descuento))
                }

            case "BORRAR":

                return null


            default:
                return estado


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