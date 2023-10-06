
import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import { customToastNotificacionContext } from "../Contextos"
import { useCallback, useState } from "react"
import { CustomToastNotificaciones } from "@/components//CustomToastNotificacion"
import { buscarCodigoDeMensajes } from "@/helper/buscarCodigoDeMensajes"
import { CustomMensaje } from "@/ContructoresJS//CustomMensaje"

/*
*Este provider, proporciona un notificacion personalizada, en base en la busqueda de la function de buscarCodigoDeMensaje.
*codigoDeMensaje  se ejecuta dentro de un try catch con el codigo correspondiente, ya sea dado por el backEnd o escrito de forma manuel en el frontEnd
*El mismo  si encuentro algun codigo ejecutara un throw, el cual captura el constructor CustomMensaje y ejecuta generarAlerta. 
*
+++/Cosas a tener en cuenta.
*
*Separar la logica donde se invoque el context y envolver la function que mantiene la logica del componente en un useCallback.
*Asi no se re-renderizara en ningun componente mas en que esta ejecutado.
*Es decir crear 2 componentes el cual contiene todo la estructura JSX y otro componente JSX que contiene la logica,el contexto y la function Callback, y envuelve el primer JSX con la estructura
*/

export const CustomToastNotificacionProvider = ({ children }) => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const [alerta, setAlerta] = useState({})

    const generarAlerta = (data = {}) => {

        setAlerta(data)
        alternarMostrar()

    }


    return (
        <>
            <customToastNotificacionContext.Provider value={{
                generarAlerta,
                buscarCodigoDeMensajes,
                CustomMensaje
            }} >
                {children}
                <CustomToastNotificaciones
                    alerta={alerta}
                    mostrar={mostrar}
                    alternarMostrar={alternarMostrar}
                >
                </CustomToastNotificaciones>
            </customToastNotificacionContext.Provider>
        </>
    )
}