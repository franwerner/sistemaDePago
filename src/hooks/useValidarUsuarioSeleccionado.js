import { useContext } from "react"
import { listaUsuariosContext } from "@/context/Contextos"
import  {buscarCodigoDeMensajes} from "../common/helper/buscarCodigoDeMensajes.js"

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