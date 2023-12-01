import { calcularPorcentaje } from "@/common//helper/calcularPorcentaje";
import { TarifaContex, productoReducerContext } from "@/context//Contextos";
import { useContext, useMemo } from "react";

export const useAplicarPorcentajeAProductos = () => {
    const { listaProducto } = useContext(productoReducerContext)

    const { tarifaActual } = useContext(TarifaContex)

    const dependeciaString = JSON.stringify(listaProducto)

    const porcentaje = (input) => calcularPorcentaje({ porcentaje: tarifaActual.porcentaje, numero: input }) + input

    const newList = useMemo(() => {

        return listaProducto.map(item => {
            return { ...item, precioFinal: porcentaje(item.precioFinal), precio: porcentaje(item.precio), precioModificado: porcentaje(item.precioModificado) }
        })

    }, [dependeciaString])

    return newList
};