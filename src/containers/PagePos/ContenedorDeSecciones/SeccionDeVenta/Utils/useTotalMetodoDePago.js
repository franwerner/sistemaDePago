import { useContext, useMemo } from "react";
import { useTotalListaProducto } from "./useTotalListaProducto";
import { restoDelPagoContext } from "@/context/Contextos";
import { separarNumerosConDecimales } from "@/common/helper/separarNumerosConDecimales";
import { verificarSiEsNegativo } from "@/common//helper/verificarSiEsNegativo";

export const useTotalMetodoDePago = () => {

    const { total, descuento } = useTotalListaProducto()

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual)

    return useMemo(() => {

        const sumaDeRestos = pagoActual.reduce((acc, current) => acc - current.resto, (total - descuento))

        const verificarCambio = !verificarSiEsNegativo(total)  && verificarSiEsNegativo(sumaDeRestos) ? Math.abs(sumaDeRestos) : 0

        const verificarResto = verificarSiEsNegativo(total) || !verificarSiEsNegativo(sumaDeRestos) ? sumaDeRestos : 0

        return {
            restante: verificarResto,
            cambio: verificarCambio
        }

    }, [total, dependeciaString])

}


export const TotalMetodoDePagoMemoizado = ({ obj }) => {

    const listaMetodo = useTotalMetodoDePago()

    const propActual = listaMetodo[obj] || 0

    return separarNumerosConDecimales(propActual)
}
