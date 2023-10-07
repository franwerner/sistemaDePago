import { useContext } from "react"
import { listaUsuariosContext } from "@/context/Contextos"
import { validarUsuarioFetch } from "@/helper/endpoints/validarUsuarioFetch"
import { buscarCodigoDeMensajes } from "@/helper/buscarCodigoDeMensajes"

export const useValidarUsuarioSeleccionado = () => {

    const { cambiarUsuario } = useContext(listaUsuariosContext)

    const validar = async (data) => {
   
        const response = await validarUsuarioFetch(data)

        const mensaje = buscarCodigoDeMensajes(response)

        if (!mensaje) {
            cambiarUsuario(data)
            return "Validado"
        }

    }

    return validar


}