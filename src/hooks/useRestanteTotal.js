import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { useBuscarMetodosDePago } from "./useBuscarMetodosDePago";
import { calcularRestosTotales } from "@/helper/calcularRestosTotales";


export const useRestanteTotal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { calculoConTarifa } = precioFinal

    const { metodoEncontrado } = useBuscarMetodosDePago()

    const restosTotales = useMemo(() => {
        return calcularRestosTotales(calculoConTarifa, metodoEncontrado)
    }, [calculoConTarifa, listaDeRestos])

    return { restosTotales }

}