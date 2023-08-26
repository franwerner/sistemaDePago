
import { useMemo } from "react"
import { useContext } from "react"
import { TarifaContex } from "../context/Contextos"
import { calculadoraPorcentaje } from "../helper/calcularPorcentaje"

export const useListadoFinalProducto = (listadoProductos) => {



   const { tarifa } = useContext(TarifaContex)


   const listadoFinal = useMemo(() => {

      const calculo = listadoProductos.reduce((acc, { precioModificado, cantidadSeleccionada }) =>
         acc + precioModificado * cantidadSeleccionada, 0)

      const porcentaje = calculadoraPorcentaje(calculo, tarifa.tarifa) + calculo

      return porcentaje

   }, [listadoProductos, tarifa.tarifa])


   return {
      listadoFinal,
   }
}