import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";

export const useCalcularCambio = () => {

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { calculoConTarifa } = precioFinal

    return useMemo(() => {

        if (!pagoActual) return 0

        const cambio = pagoActual.metodosDePago.reduce((acc, current) => acc - current.resto, calculoConTarifa)

        const verificarSiEsNegativo = Math.sign(cambio) == -1 ? cambio : 0

        return Math.abs(verificarSiEsNegativo)

    }, [dependeciaString])

}