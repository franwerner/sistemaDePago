
import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import { customToastNotificacionContext } from "../Contextos"
import { useCallback, useState } from "react"
import { CustomToastNotificaciones } from "@/components//CustomToastNotificacion"


export const CustomToastNotificacionProvider = ({ children }) => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const [alerta, setAlerta] = useState({})

    const generarAlerta = useCallback((data = {}) => {
        setAlerta(data)
        alternarMostrar()
    }, [])


    return (
        <>
            <customToastNotificacionContext.Provider value={{
                generarAlerta,
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