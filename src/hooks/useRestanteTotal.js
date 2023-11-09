import { useContext, useMemo } from "react";
import { useSumaTotalDeProductos } from "./useSumaTotalDeProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";
import { useCalcularDescuento } from "./useCalcularDescuento";

export const useRestanteTotal = () => {

    const sumaDeProductos = useSumaTotalDeProductos()

    const descuento = useCalcularDescuento()

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)

    return useMemo(() => {

        const sumaDeRestos = pagoActual.metodosDePago.reduce((acc, current) => acc - current.resto, (sumaDeProductos - descuento))

        const esNegativo = Math.sign(sumaDeProductos) == -1

        if (!esNegativo) {
          
            return Math.sign(sumaDeRestos) == -1 ? 0 : sumaDeRestos
        } else {

            return sumaDeRestos 
        }

    }, [sumaDeProductos, dependeciaString])


}


export const RestanteTotalMemoizando = () => {

    const resto = useRestanteTotal()

    return separarNumerosConDecimales(resto)
}
