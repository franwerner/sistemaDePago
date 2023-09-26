import { useEffect, useState } from "react"
import { useEjeXYDocument } from "./useEjeXYDocument"


export const useEjesFinales = ({ ejeLimitacion, target }) => {


    const [ejesFinales, setEjesFinales] = useState({})

    const { clientX, clientY, esteblecerEstadoDeMovimiento, cambiarEjeX, cambiarEjeY } = useEjeXYDocument(ejeLimitacion)

    const establecerEjesFinales = (e) => {
        console.log(e, target.id)

        if (e.target.id !== target && e.type == "mousedown") return

        setEjesFinales({ clientX, clientY })
        cambiarEjeX(false)
        cambiarEjeY(false)
        esteblecerEstadoDeMovimiento()
    };



    useEffect(() => {

        if (!clientX || !clientY) return



        document.addEventListener("mouseup", establecerEjesFinales)
        document.addEventListener("mousedown", establecerEjesFinales)

        return (() => {
            document.removeEventListener("mouseup", establecerEjesFinales)
            document.removeEventListener("mousedown", establecerEjesFinales)
        })

    }, [clientX, clientY])


    return {
        establecerEjesFinales,
        ejesFinales,
        clientX,
        clientY
    }

}