import { CustomError } from "@/ContructoresJS/customError"

const listaDeErrores = [

    { "codigo": 1, "motivo": "La contraseña es incorrecta" },

]


export const buscarCodigosDeErrores = (datos = {}) => {

    console.log(datos)

    if (!datos.error) return

    const error = listaDeErrores.find((err) => err.codigo === datos.error.codigo)

    const { codigo, motivo } = error

    throw new CustomError(codigo, motivo)

}