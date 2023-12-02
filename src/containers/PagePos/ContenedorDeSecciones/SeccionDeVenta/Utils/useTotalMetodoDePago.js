import { useContext, useMemo } from "react";
import { useTotalListaProducto } from "./useTotalListaProducto";
import { restoDelPagoContext } from "@/context/Contextos";
import { separarNumerosConDecimales } from "@/common/helper/separarNumerosConDecimales";
import { verificarSiEsNegativo } from "@/common//helper/verificarSiEsNegativo";

export const useTotalMetodoDePago = () => {

    const { adeudoTotal } = useTotalListaProducto()

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual)

    const res = useMemo(() => {

        const sumaDeRestos = pagoActual.reduce((acc, current) => acc - current.resto, adeudoTotal)

        const verificarCambio = !verificarSiEsNegativo(adeudoTotal) && verificarSiEsNegativo(sumaDeRestos) ? Math.abs(sumaDeRestos) : 0

        const verificarResto = verificarSiEsNegativo(adeudoTotal) || !verificarSiEsNegativo(sumaDeRestos) ? sumaDeRestos : 0 

        return {
            restante: verificarResto,
            cambio: verificarCambio
        }

    }, [adeudoTotal, dependeciaString])


    return res
}


export const TotalMetodoDePagoMemoizado = ({ obj }) => {

    const listaMetodo = useTotalMetodoDePago()

    const propActual = listaMetodo[obj] || 0

    return separarNumerosConDecimales(propActual)
}
