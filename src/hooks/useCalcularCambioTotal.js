import { useContext, useMemo } from "react";
import { restoDelPagoContext } from "@/context/Contextos";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";
import { useSumaTotalDeProductos } from "./useSumaTotalDeProductos";

export const useCalcularCambio = () => {

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)

    const sumaDePructos = useSumaTotalDeProductos()

    const cambioTotal = useMemo(() => {


        if (!pagoActual || Math.sign(sumaDePructos) == -1) return 0

        const cambio = pagoActual.metodosDePago.reduce((acc, current) => acc - current.resto, sumaDePructos)

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
