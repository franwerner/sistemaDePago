import { PosicionadorDeIndices } from "./contructores/posicionadorDeIndices"
import { SwitchBotonesTactiles } from "./contructores/switchBotonesTactiles"



export const switchModificacionMetodosDePago = (state, btn) => {

    const copiaUltimoSeleccionado = { ...state.ultimoSeleccionado }

    const { tipoDeButton, comma } = btn

    const copiaMetodosDePago = [...state.metodosDePago]

    const { resto} = copiaUltimoSeleccionado

    const resultadoFinal = new SwitchBotonesTactiles(resto, tipoDeButton, comma).switchBtn()

    copiaUltimoSeleccionado.resto = resultadoFinal

    const posicionar = new PosicionadorDeIndices(copiaMetodosDePago, copiaUltimoSeleccionado).posicionar()

    return {
        ultimoSeleccionado: copiaUltimoSeleccionado,
        metodosDePago: posicionar
    }
}

