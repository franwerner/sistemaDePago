import { useState } from "react"
import { validarUsuarioFetch } from "../helper/validarUsuarioFetch"


export const useValidarUsuario = () => {

    const [usuarioValidado, setUsuarioValidado] = useState(false)


    const validar = async (usuario) => {

        const response = await validarUsuarioFetch(usuario)

        setUsuarioValidado(response)

    }


    return {
        usuarioValidado,
        validar
    }

}
