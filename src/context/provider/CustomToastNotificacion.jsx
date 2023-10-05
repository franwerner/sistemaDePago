
import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import { customToastNotificacion } from "../Contextos"
import { CustomErrorToast } from "@/components/CustomErrorToast"
import { useState } from "react"

export const CustomToastNotificacion = ({ children }) => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const [error, setError] = useState({})

    const generarError = (data = {}) => {
        setError(data)
        alternarMostrar()
    }


    return (
        <>
            <customToastNotificacion.Provider value={{
                generarError,
            }} >
                {children}
                <CustomErrorToast
                    error={error}
                    mostrar={mostrar}
                    alternarMostrar={alternarMostrar}
                >
                </CustomErrorToast>
            </customToastNotificacion.Provider>
        </>
    )
}