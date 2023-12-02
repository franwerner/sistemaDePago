import { useContext, useMemo } from "react"
import { productoReducerContext } from "@/context/Contextos"
import { separarNumerosConDecimales } from "@/common/helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje"
import { calcularPorcentaje } from "@/common//helper/calcularPorcentaje"

export const useTotalListaProducto = () => {

   const { listaProducto } = useContext(productoReducerContext)

   const dependeciaString = JSON.stringify(listaProducto)

   const { total = 0, descuento = 0, items = 0 } = useMemo(() => {

      return listaProducto.reduce((acc, { precioModificado, cantidad, descuento }) => {

         const suma = precioModificado * cantidad

         const porcentaje = calcularPorcentaje({ numero: precioModificado, porcentaje: descuento })

         const total = acc.total ? acc.total + suma : suma

         const descuentoTotal = acc.descuento ? acc.descuento + porcentaje : porcentaje

         const itemsTotal = acc.items ? acc.items + cantidad : cantidad

         return { total: total, descuento: Math.abs(descuentoTotal), items: itemsTotal }

      }, {})

   }, [dependeciaString])


   const porcentaje = (input) => useCalculadoraPorcenje(input) + input

   const totalRes = porcentaje(total)

   const descuentoRes = porcentaje(descuento)


   return { total: totalRes, descuento: descuentoRes, adeudoTotal: totalRes - descuentoRes, items }

}

export const TotalListaProductoMemoizado = ({ obj }) => {

   const listaProducto = useTotalListaProducto()

   const propActual = listaProducto[obj] || 0

   return obj == "items" ? parseFloat(propActual.toFixed(2)) : separarNumerosConDecimales(propActual)
}



