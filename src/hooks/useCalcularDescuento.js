import React, { useContext, useMemo } from "react"
import { productoReducerContext } from "../context/Contextos"
import { calcularPorcentaje } from "../common/helper/calcularPorcentaje"
import { separarNumerosConDecimales } from "../common/helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "./useCalcularPorcentaje"
import { verificarSiEsNegativo } from "../common/helper/verificarSiEsNegativo"


export const useCalcularDescuento = () => {

    const { listaProducto } = useContext(productoReducerContext)

    const dependeciaString = JSON.stringify(listaProducto)

    const descuento = useMemo(() => {

        return listaProducto.reduce((acc, { precioModificado, cantidad, descuento }) => {

            const suma = precioModificado * cantidad

            const porcentaje = calcularPorcentaje({ numero: suma, porcentaje: descuento })

            const resultado = acc + porcentaje

            return verificarSiEsNegativo(resultado) ? 0 : resultado

        }, 0)

    }, [dependeciaString])

    return useCalculadoraPorcenje(descuento) + descuento
}


export const CalcularDescuentoMemoizado = React.memo(() => {

    const descuento = useCalcularDescuento()

    return separarNumerosConDecimales(descuento)
})