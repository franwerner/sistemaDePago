import { ModificacionProductos } from "./contructores/ModificacionProductos"
import { PosicionadorDeIndices } from "./contructores/posicionadorDeIndices"



export const switchModificacionesProductos = (state, ultimoSeleccionado, btn) => {

    const copiaState = [...state]

    const { tipoDeButton, comma } = btn

    const copiaUltimoSeleccionado = { ...ultimoSeleccionado }

    const { cantidadSeleccionada } = copiaUltimoSeleccionado

    const resultadoFinal = new ModificacionProductos(cantidadSeleccionada, tipoDeButton, comma).switchBtn()

    copiaUltimoSeleccionado.cantidadSeleccionada = resultadoFinal

    const posicionar = new PosicionadorDeIndices(copiaState, copiaUltimoSeleccionado, "nombre").posicionar()

    return [
        [...posicionar],
        copiaUltimoSeleccionado
    ]

}
