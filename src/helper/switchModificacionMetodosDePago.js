import { switchDefault } from "./switchButonTactilDefault"




export const switchModificacionesProductos = (state, ultimoSeleccionado, btn) => {

    const copiaState = [...state]

    const copiaUltimoSeleccionado = { ...ultimoSeleccionado }

    const { cantidadSeleccionada } = copiaUltimoSeleccionado

    copiaUltimoSeleccionado.cantidadSeleccionada = switchDefault(cantidadSeleccionada, btn)({ newCase: btn })

    const indice = copiaState.findIndex(item => item.nombre == copiaUltimoSeleccionado.nombre)

    copiaState.splice(indice, 1, copiaUltimoSeleccionado)

    return [
        [...copiaState],
        copiaUltimoSeleccionado
    ]

}

export const switchModificacionMetodosDePago = (state, btn) => {

    const copiaUltimoSeleccionado = { ...state.ultimoSeleccionado }

    const copiaMetodosDePago = [...state.metodosDePago]

    const { resto, id } = copiaUltimoSeleccionado

    const resultadoFinal = switchDefault(resto, btn)()

    copiaUltimoSeleccionado.resto = resultadoFinal

    const indice = state.metodosDePago.findIndex(item => item.id == id)

    copiaMetodosDePago.splice(indice, 1, copiaUltimoSeleccionado)

    return {
        ultimoSeleccionado: copiaUltimoSeleccionado,
        metodosDePago: copiaMetodosDePago
    }
}

