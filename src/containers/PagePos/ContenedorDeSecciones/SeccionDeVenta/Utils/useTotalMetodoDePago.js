import { useContext, useMemo } from "react";
import { useTotalListaProducto } from "./useTotalListaProducto";
import { restoDelPagoContext } from "@/context/Contextos";
import { separarNumerosConDecimales } from "@/common/helper/separarNumerosConDecimales";
import { verificarSiEsNegativo } from "@/common//helper/verificarSiEsNegativo";
import { productoReducerContext } from "@/context//Contextos";

export const useTotalMetodoDePago = () => {

    const { total, descuento } = useTotalListaProducto()
    const { listaProducto } = useContext(productoReducerContext)

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)

    return useMemo(() => {

        const sumaDeRestos = pagoActual.metodosDePago.reduce((acc, current) => acc - current.resto, (total - descuento))

        const verificarCambio = !verificarSiEsNegativo(total) && listaProducto.length > 0 && verificarSiEsNegativo(sumaDeRestos) ? Math.abs(sumaDeRestos) : 0

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
