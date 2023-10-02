

import { useContext } from "react"
import { customErrorContext, listaUsuariosContext } from "@/context/Contextos"
import { buscarCodigosDeErrores } from "@/helper/codigoDeErrores"
import { validarUsuarioFetch } from "@/helper/endpoints/validarUsuarioFetch"
import { CustomError } from "@/ContructoresJS/customError"


export const useValidarUsuarioSeleccionado = () => {

    const { cambiarUsuario } = useContext(listaUsuariosContext)

    const { generarError } = useContext(customErrorContext)

    const validar = async (usuarioSeleccionado, data) => {

        try {

            const { response } = await validarUsuarioFetch(data)

            buscarCodigosDeErrores(response)

            cambiarUsuario(usuarioSeleccionado)

            return { "message": "validado" }

        } catch (error) {

            if (error instanceof CustomError) {

                generarError(error)

            } else {
                console.log(error)
            }

            return { "message": "error" }

        }
    }

    return {
        validar
    }

}