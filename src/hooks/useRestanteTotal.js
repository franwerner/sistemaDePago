import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";


export const useRestanteTotal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { pagoActual } = useContext(restoDelPagoContext)

    const { calculoConTarifa } = precioFinal

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)


    const restoTotal = useMemo(() => {

        const sumaDeRestos = pagoActual.metodosDePago.reduce((acc, current) => acc - current.resto, calculoConTarifa)

        return Math.sign(sumaDeRestos) == -1 ? 0 : sumaDeRestos

    }, [calculoConTarifa, dependeciaString])

    return {
        restoTotal
    }

}