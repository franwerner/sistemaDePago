import { CustomError } from "@/ContructoresJS/customError"

const listaDeMensajes = [
    { "codigo": 1, "motivo": "Error al verificar el usuario" },

]


export const buscarCodigoDeMensajes = (datos = {}) => { //Esto sirve para cualquier mensaje de interaccion con el frontEnd


    if (!datos.codigo) return

    const mensaje = listaDeMensajes.find((msj) => msj.codigo === datos.codigo)

    const { codigo, motivo } = mensaje

    throw new CustomError(codigo, motivo)

}