
import { useMemo } from "react"
import { useContext } from "react"
import { TarifaContex, productoReducerContext } from "../context/Contextos"

export const useListadoFinalProducto = () => {

   const { listaProducto } = useContext(productoReducerContext)

   const { tarifa } = useContext(TarifaContex)


   const listadoFinal = useMemo(() => {

      const calculo = listaProducto.reduce((acc, { precioModificado, cantidadSeleccionada }) =>
         acc + precioModificado * cantidadSeleccionada, 0)

         return (tarifa.tarifa / 100) * calculo + calculo

   }, [listaProducto, tarifa.tarifa])


   return {
      listadoFinal,
   }
}