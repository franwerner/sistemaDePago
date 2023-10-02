import { calcularPorcentaje } from "@/helper/calcularPorcentaje";
import { restoDelPagoContext } from "@/context/Contextos";
import { useContext, useMemo } from "react";

export const useCalcularTotalAValidar = () => {

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)

    const totalAValidar =  useMemo(() => {

        return pagoActual.metodosDePago.reduce((acc, current) => {

            const porcentaje = calcularPorcentaje({ porcentaje: current.porcentaje, numero: current.restoParaValidar })

            const total = acc + (porcentaje + current.restoParaValidar)

            return total

        }, 0)

    }, [dependeciaString])

    return {
        totalAValidar
    }

};