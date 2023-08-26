import { useEffect, useState } from "react"
import { useEjeXYDocument } from "./useEjeXYDocument"


export const useEjesFinales = (ejeLimitacion) => {


    const [ejesFinales, setEjesFinales] = useState({})

    const { clientX, clientY, esteblecerEstadoDeMovimiento, cambiarEjeX } = useEjeXYDocument(ejeLimitacion)

    const establecerEjesFinales = (e) => {
        
        e.stopPropagation()

        if (e.type == "mouseup") {
            setEjesFinales({ clientX, clientY })
            cambiarEjeX(false)

        }

        esteblecerEstadoDeMovimiento()
    };


    useEffect(() => {


        if (!clientX || !clientY) return

        document.addEventListener("mouseup", establecerEjesFinales)

        return (() => {
            document.removeEventListener("mouseup", establecerEjesFinales)
        })

    }, [clientX, clientY])


    return {
        establecerEjesFinales,
        ejesFinales,
        clientX,
        clientY
    }

}