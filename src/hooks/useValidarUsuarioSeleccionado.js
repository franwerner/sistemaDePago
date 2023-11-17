import { useContext } from "react"
import { listaUsuariosContext } from "@/context/Contextos"
import { cargaDiferida } from "../helper/cargaDiferida"

const buscarCodigoDeMensajes =  cargaDiferida(() => import("@/helper//buscarCodigoMensajePersonalizado"))
const validarUsuarioFetch =  cargaDiferida(() => import("@/helper/endpoints/validarUsuarioFetch"))

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