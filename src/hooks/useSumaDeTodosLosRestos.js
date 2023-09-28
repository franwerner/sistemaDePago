import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";


export const useSumaDeTodosLosRestos = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    console.log(precioFinal)

    const { listaDePagos } = useContext(restoDelPagoContext)

    console.log(listaDePagos)
}