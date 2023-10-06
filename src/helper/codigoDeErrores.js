import { CustomError } from "@/ContructoresJS/customError"

const listaDeErrores = [
    { codigo: 1, motivo: "Contraseña incorrecta, por favor vuelve a intentarlo", tipo: "Error" },
    {codigo : 2,motivo : "Debe tener al menos un producto en la lista y el resto en $ 0,00",tipo : "Informativo"}

]


export const buscarCodigosDeErrores = (datos = {}) => { //Esto sirve para cualquier mensaje de interaccion con el backEnd

    if (!datos.codigo) return

    const error = listaDeErrores.find((err) => err.codigo === datos.codigo)

    const { codigo, motivo, tipo } = error

    throw new CustomError(codigo, motivo, tipo)

}