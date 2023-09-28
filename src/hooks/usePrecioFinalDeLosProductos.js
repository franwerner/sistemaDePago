
import { useMemo } from "react"
import { useContext } from "react"
import { TarifaContex, productoReducerContext } from "@/context/Contextos"

export const usePrecioFinalDeLosProductos = () => {

   const { listaProducto } = useContext(productoReducerContext)

   const { tarifaActual } = useContext(TarifaContex)


   const precioFinal = useMemo(() => {

      const calculo = listaProducto.reduce((acc, { precioModificado, cantidadSeleccionada }) =>
         acc + precioModificado * cantidadSeleccionada, 0)

      const restoDelPorcentaje = (tarifaActual.porcentaje / 100) * calculo
      return {
         calculoConTarifa: restoDelPorcentaje + calculo,
         calculoSinTarifa: calculo,
         restoDelPorcentaje
      }

   }, [listaProducto, tarifaActual.porcentaje])


   return {
      precioFinal
   }
}