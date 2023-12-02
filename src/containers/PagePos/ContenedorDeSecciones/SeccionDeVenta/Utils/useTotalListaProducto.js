import { useContext, useMemo } from "react"
import { productoReducerContext } from "@/context/Contextos"
import { separarNumerosConDecimales } from "@/common/helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje"
import { calcularPorcentaje } from "@/common//helper/calcularPorcentaje"

export const useTotalListaProducto = () => {

   const { listaProducto } = useContext(productoReducerContext)

   const dependeciaString = JSON.stringify(listaProducto)

   const { total = 0, descuento = 0, items = 0 } = useMemo(() => {

      const total = listaProducto.reduce((acc, { precioModificado, cantidad }) => acc + precioModificado * cantidad, 0)
      const descuento = listaProducto.reduce((acc, { descuento, precioModificado,cantidad }) => acc + calcularPorcentaje({ porcentaje: descuento, numero: precioModificado * cantidad}), 0)
      const items = listaProducto.reduce((acc, { cantidad }) => acc + cantidad, 0)

      return {
         total,
         descuento,
         items
      }

   }, [dependeciaString])
   
   const porcentaje = (input) => useCalculadoraPorcenje(input) + input

   const totalTarifa = porcentaje(total)
   const descuentoTarifa = porcentaje(descuento)

   return { total: totalTarifa, descuento: descuentoTarifa, adeudoTotal: totalTarifa - descuentoTarifa, items }

}

export const TotalListaProductoMemoizado = ({ obj }) => {

   const listaProducto = useTotalListaProducto()

   const propActual = listaProducto[obj] || 0

   const verificarNumero = isNaN(propActual) ? 0 : propActual

   return obj == "items" ? parseFloat(verificarNumero).toFixed(2) : separarNumerosConDecimales(propActual)
}



