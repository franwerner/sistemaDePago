import {useContext } from "react"
import { customToastNotificacionContext, listaUsuariosContext } from "@/context/Contextos"
import { validarUsuarioFetch } from "@/helper/endpoints/validarUsuarioFetch"

export const useValidarUsuarioSeleccionado = () => {

    const { cambiarUsuario } = useContext(listaUsuariosContext)

    const { generarAlerta, buscarCodigoDeMensajes, CustomMensaje } = useContext(customToastNotificacionContext)

    const validar = async (data) => {

        try {

            const response = await validarUsuarioFetch(data)

            buscarCodigoDeMensajes(response)

            cambiarUsuario(data)

            return { "message": "validado" }

        } catch (error) {

            if (error instanceof CustomMensaje) {
                generarAlerta(error)
            }

        }

    }


    return validar


}