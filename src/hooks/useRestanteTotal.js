import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./useSumaTotalDeProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";

export const useRestanteTotal = () => {

    const sumaDeProductos = usePrecioFinalDeLosProductos()

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)

    const restoTotal = useMemo(() => {

        const sumaDeRestos = pagoActual.metodosDePago.reduce((acc, current) => acc - current.resto, sumaDeProductos)

        const esNegativo = Math.sign(sumaDeProductos) == -1

        if (!esNegativo) {
            return Math.sign(sumaDeRestos) == -1 ? 0 : sumaDeRestos
        } else {
            return sumaDeRestos
        }



    }, [sumaDeProductos, dependeciaString])

    return {
        restoTotal
    }

}


export const RestanteTotalMemoizando = () => {
    const { restoTotal } = useRestanteTotal()
    return separarNumerosConDecimales(restoTotal)
}
