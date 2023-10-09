
import { useCallback, useReducer } from 'react';
import { verificarPropiedadesDeUnObjecto } from '../helper/verificarPropiedadesDeUnObjecto';


const agregarNuevasPropiedades = (action) => {

    const objectoPorDefecto = {
        "editado": false,
        "cantidadSeleccionada": 1,
        "precioModificado": action.producto.precio
    }

    return { ...objectoPorDefecto, ...action.producto }
}


const validarProductoExistente = (state, action) => {

    const productoExistente = state.some(({ nombre }) => nombre == action.producto.nombre)

    return productoExistente

}


const reducer = (state, action) => {


    const { producto, type } = action

    if (type == "RESTABLECER") return []

    else if (validarProductoExistente(state, action) == false) return [...state, agregarNuevasPropiedades(action)];

    return state.map(estado => {

        if (estado.nombre !== action.producto.nombre) return estado

        const { cantidadSeleccionada } = estado

        switch (type) {
            case "AGREGAR":

                return {
                    ...estado,
                    "cantidadSeleccionada": cantidadSeleccionada + 1,
                };

            case "ELIMINAR":


                if (cantidadSeleccionada <= 0) {
                    return null
                } else {
                    return {
                        ...estado,
                        "cantidadSeleccionada": cantidadSeleccionada - 1,
                    };
                }

            case "EDITAR":
                return {
                    ...estado,
                    "cantidadSeleccionada": producto.cantidadSeleccionada,
                    "precioModificado": producto.precioModificado,
                    "editado": true

                };


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

    const eliminarProducto = useCallback((producto) => {

        if (verificarPropiedadesDeUnObjecto(producto)) return

        dispatch({ type: "ELIMINAR", producto })

    }, [])

    const editarProducto = (producto) => {

        if (!producto.nombre) return

        dispatch({ type: "EDITAR", producto })

    }

    const borrarProducto = (producto) => {

        if (verificarPropiedadesDeUnObjecto(producto)) return

        dispatch({ type: "BORRAR", producto })
    }


    const restablecerProductos = () => {
        dispatch({ type: "RESTABLECER", })
    }

    return {
        agregarProducto,
        eliminarProducto,
        listaProducto,
        editarProducto,
        borrarProducto,
        restablecerProductos
    }
}