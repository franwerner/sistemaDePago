
import { useMemo } from "react"
import { useContext } from "react"
import { TarifaContex, productoReducerContext } from "../context/Contextos"

export const useListadoFinalProducto = () => {

   const { listaProducto } = useContext(productoReducerContext)

   const { tarifaActual } = useContext(TarifaContex)


   const listadoFinal = useMemo(() => {

      const calculo = listaProducto.reduce((acc, { precioModificado, cantidadSeleccionada }) =>
         acc + precioModificado * cantidadSeleccionada, 0)

      return {
         calculoConTarifa: (tarifaActual.porcentaje / 100) * calculo + calculo,
         calculoSinTarifa: calculo
      }

   }, [listaProducto, tarifaActual.porcentaje])


   return {
      listadoFinal
   }
}