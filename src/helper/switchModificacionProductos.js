import { switchDefault } from "./switchButonTactilDefault"

export const switchModificacionesProductos = (state, ultimoSeleccionado, btn) => {

    const copiaState = [...state]

    const copiaUltimoSeleccionado = { ...ultimoSeleccionado }

    const { cantidadSeleccionada } = copiaUltimoSeleccionado

    copiaUltimoSeleccionado.cantidadSeleccionada = switchDefault(cantidadSeleccionada, btn)

    const indice = copiaState.findIndex(item => item.nombre == copiaUltimoSeleccionado.nombre)

    copiaState.splice(indice, 1, copiaUltimoSeleccionado)

    return [
        [...copiaState],
        copiaUltimoSeleccionado
    ]

}
