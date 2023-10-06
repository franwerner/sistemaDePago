import { useContext } from "react"
import { listaUsuariosContext } from "@/context/Contextos"
import { validarUsuarioFetch } from "@/helper/endpoints/validarUsuarioFetch"
import { buscarCodigoDeMensajes } from "@/helper/buscarCodigoDeMensajes"

export const useValidarUsuarioSeleccionado = () => {

    const { cambiarUsuario } = useContext(listaUsuariosContext)

    const validar = async (data) => {

        try {

            const response = await validarUsuarioFetch(data)

            buscarCodigoDeMensajes(response)

            cambiarUsuario(data)

            return { "message": "validado" }

        } catch (error) {

            return { "message": "denegado" }

        }

    }

    return validar


}