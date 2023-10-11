import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";

export const useCalcularCambio = () => {

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)

    const { calculoConTarifa } = usePrecioFinalDeLosProductos()

    const cambioTotal = useMemo(() => {


        if (!pagoActual || Math.sign(calculoConTarifa) == -1) return 0

        const cambio = pagoActual.metodosDePago.reduce((acc, current) => acc - current.resto, calculoConTarifa)

        const verificarSiEsNegativo = Math.sign(cambio) == -1 ? cambio : 0

        return Math.abs(verificarSiEsNegativo)

    }, [dependeciaString])

    return {
        cambioTotal
    }

}

export const CambioTotalMemoizado = () => {

    const { cambioTotal } = useCalcularCambio()

    return separarNumerosConDecimales(cambioTotal)
}
