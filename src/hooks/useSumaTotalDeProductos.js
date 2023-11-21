
import { useContext, useMemo } from "react"
import { productoReducerContext } from "@/context/Contextos"
import { separarNumerosConDecimales } from "../common/helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "./useCalcularPorcentaje"

export const useSumaTotalDeProductos = () => {

   const { listaProducto } = useContext(productoReducerContext)

   const dependeciaString = JSON.stringify(listaProducto)

   const suma = useMemo(() => {

      return listaProducto.reduce((acc, { precioModificado, cantidad }) =>
         acc + (precioModificado * cantidad), 0)

   }, [dependeciaString])

   return useCalculadoraPorcenje(suma) + suma

}


export const SumarProductosMemoizado = () => {

   const suma = useSumaTotalDeProductos()

   return separarNumerosConDecimales(suma)
}



