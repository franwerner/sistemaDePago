import { CustomError } from "@/ContructoresJS/customError"

const listaDeMensajes = [
    { "codigo": 1, "motivo": "Error al verificar el usuario" },

]


export const buscarCodigoDeMensajes = (datos = {}) => {

    if (!datos.mensaje) return

    const mensaje = listaDeMensajes.find((msj) => msj.codigo === datos.mensaje.codigo)

    const { codigo, motivo } = error

    throw new CustomError(codigo, motivo)

}