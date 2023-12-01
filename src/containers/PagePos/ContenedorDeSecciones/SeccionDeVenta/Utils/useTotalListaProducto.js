import { useContext, useMemo } from "react"
import { productoReducerContext } from "@/context/Contextos"
import { separarNumerosConDecimales } from "@/common/helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje"

export const useTotalListaProducto = () => {

   const { listaProducto } = useContext(productoReducerContext)

   const dependeciaString = JSON.stringify(listaProducto)

   const { total = 0, descuento = 0 } = useMemo(() => {

      return listaProducto.reduce((acc, { precioModificado, cantidad, precioFinal }) => {

         const suma = precioModificado * cantidad

         const porcentaje = precioModificado - precioFinal

         const total = acc.total ? acc.total + suma : suma

         const descuentoTotal = acc.descuento ? acc.descuento + porcentaje : porcentaje

         return { total: total, descuento: Math.abs(descuentoTotal) }

      }, {})

   }, [dependeciaString])

   const porcentaje = (input) => useCalculadoraPorcenje(input) + input

   const totalRes = porcentaje(total)
   const descuentoRes = porcentaje(descuento)

   return { total: totalRes, descuento: descuentoRes, adeudoTotal: totalRes - descuentoRes }

}

export const TotalListaProductoMemoizado = ({ obj }) => {

   const listaProducto = useTotalListaProducto()

   const propActual = listaProducto[obj] || 0

   return separarNumerosConDecimales(propActual)
}



