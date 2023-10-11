import { switchDefault } from "./switchButonTactilDefault"

export const switchModificacionMetodosDePago = (state, btn) => {

    const copiaUltimoSeleccionado = { ...state.ultimoSeleccionado }

    const copiaMetodosDePago = [...state.metodosDePago]

    const { resto, id } = copiaUltimoSeleccionado

    const resultadoFinal = switchDefault(resto, btn)

    copiaUltimoSeleccionado.resto = resultadoFinal

    const indice = state.metodosDePago.findIndex(item => item.id == id)

    copiaMetodosDePago.splice(indice, 1, copiaUltimoSeleccionado)

    return {
        ultimoSeleccionado: copiaUltimoSeleccionado,
        metodosDePago: copiaMetodosDePago
    }
}

