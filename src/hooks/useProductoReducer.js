
import { useCallback, useReducer } from 'react';
import { verificarPropiedadesDeUnObjecto } from '../helper/verificarPropiedadesDeUnObjecto';
import { switchModificacionesProductos } from "@/helper/switchModificacionMetodosDePago"

const agregarNuevasPropiedades = (producto) => {

    const objectoPorDefecto = {
        "editado": false,
        "cantidadSeleccionada": 1,
        "precioModificado": producto.precio,
    }

    return { ...objectoPorDefecto, ...producto }
}


const validarProductoExistente = (state, producto) => {
    const productoExistente = state.some(({ nombre }) => nombre == producto.nombre)
    return productoExistente

}

const agregar = (state, producto) => {
    const updatedState = state.map((estado) => {
        if (estado.nombre === producto.nombre) {
            return { ...estado, cantidadSeleccionada: estado.cantidadSeleccionada + 1 };
        } else {
            return estado;
        }
    });

    return updatedState;
};

const buscarElementoSeleccionado = (state, producto) => {

    return state.find(item => item.nombre == producto.nombre)
}

const filtarProductosConCantidadCero = (lista) => {
    return lista.filter(item => item.cantidadSeleccionada !== 0)
}

const reducer = ([estado, ultimoSeleccionado], { producto, type }) => {

    const productoActual = () => {

        if (validarProductoExistente(estado, producto) === false && producto.precio) {
            return [[...estado, agregarNuevasPropiedades(producto)], { ...agregarNuevasPropiedades(producto) }];
        }

        switch (type) {

            case "AGREGAR":
                return [
                    [...agregar(estado, producto)],
                    { ...buscarElementoSeleccionado(estado, producto) }
                ];

            case "MODIFICAR":

                if (estado.length == 0) return [estado, ultimoSeleccionado]
                else {
                    return switchModificacionesProductos(estado, ultimoSeleccionado, producto)
                }

            case "SELECCIONAR":
                return [
                    estado,
                    { ...producto }
                ]

            case "RESTABLECER":

                return [[], {}]

            default:
                return [estado, ultimoSeleccionado];
        }

    }

    const newState = productoActual()

    const lista = filtarProductosConCantidadCero(newState[0])

    const largo = lista.length - 1

    const ultimo = newState[1].cantidadSeleccionada == 0 ? { ...lista[largo] } : newState[1]

    return [lista, ultimo]
};




export const productoReducer = () => {

    const [listaProducto, dispatch] = useReducer(reducer, [[], {}])


    const agregarProducto = useCallback((producto) => {

        dispatch({ type: "AGREGAR", producto })
    }, [])

    const editarProducto = useCallback((producto) => {

        if (!producto.nombre) return

        dispatch({ type: "EDITAR", producto })

    }, [])

    const modificarProducto = useCallback((producto) => {

        dispatch({ type: "MODIFICAR", producto })

    }, [])

    const restablecerProductos = useCallback((producto = {}) => {
        dispatch({ type: "RESTABLECER", producto })
    }, [])

    const seleccionarProducto = useCallback((producto) => {
        dispatch({ type: "SELECCIONAR", producto })
    }, [])

    return {
        seleccionarProducto,
        modificarProducto,
        agregarProducto,
        listaProducto: listaProducto[0],
        ultimoSeleccionado: listaProducto[1],
        editarProducto,
        restablecerProductos
    }
}