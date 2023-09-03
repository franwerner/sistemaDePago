
import { useEventoMostrar } from "../../hooks/useEventoMostrar"
import { customErrorContext } from "../Contextos"
import { CustomErrorToast } from "../../components/CustomErrorToast"
import { useState } from "react"


//Para hacer un correcto funcionamiento de CustomErrorProvider, va en conjunto del helper codigoDeErrores
//Lo que hace es buscar un codigo de error y genera un error si encuentra algun error y se captura en el componente invocado
//y hace que se genere un Toast con el tipo de error y su codigo 

export const CustomErrorProvider = ({ children }) => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const [error, setError] = useState({})

    const generarError = (data = {}) => {
        setError(data)
        alternarMostrar()
    }

    //BORRAR ESTE PROVIDER

    return (
        <>
            <customErrorContext.Provider value={{
                generarError
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