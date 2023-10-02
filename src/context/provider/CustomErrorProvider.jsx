
import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import { customErrorContext } from "../Contextos"
import { CustomErrorToast } from "@/components/CustomErrorToast"
import { useState } from "react"

export const CustomErrorProvider = ({ children }) => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const [error, setError] = useState({})

    const generarError = (data = {}) => {
        setError(data)
        alternarMostrar()
    }


    return (
        <>
            <customErrorContext.Provider value={{
                generarError,
            }} >
                {children}
                <CustomErrorToast
                    error={error}
                    mostrar={mostrar}
                    alternarMostrar={alternarMostrar}
                >
                </CustomErrorToast>
            </customErrorContext.Provider>
        </>
    )
}