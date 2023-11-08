import { restoDelPagoContext } from "@/context/Contextos";
import { useContext, useMemo } from "react";

export const useCalcularTotalAValidar = () => {

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)

    return useMemo(() => {

        return pagoActual.metodosDePago.reduce((acc, current) => {

            const total = acc + current.restoParaValidar

            return total

        }, 0)

    }, [dependeciaString])

   
        
  

};