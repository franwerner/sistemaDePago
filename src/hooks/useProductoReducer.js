
import { useCallback, useReducer } from 'react';
import { switchModificacionesProductos } from '../helper/switchModificacionProductos';


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

const mapeoDeProductos = ({ lista, ultimo }) => {

    return lista.map(item => {
        return item.nombre == ultimo.nombre && item.cantidadSeleccionada == 0 ? undefined : item

    })

}

const filtradoDeCantidadEnCero = ({ lista, ultimo, producto, ultimoSeleccionado }) => {

    if (ultimo.cantidadSeleccionada == 0 && ultimoSeleccionado.cantidadSeleccionada == 0 && producto.tipoDeButton == "Backspace") {
        return mapeoDeProductos({ lista, ultimo }).filter(item => item !== undefined)
    }
    else return lista
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

    const lista = newState[0]

    const ultimo = newState[1]

    const filtrado = filtradoDeCantidadEnCero({ lista, ultimo, producto, ultimoSeleccionado })

    const largo = lista.length

    const largo2 = filtrado.length

    const ultimoSelecc = largo2 < largo ? { ...filtrado[largo2 - 1] } : newState[1]

    return [filtrado, ultimoSelecc]
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