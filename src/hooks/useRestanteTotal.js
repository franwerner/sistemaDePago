import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { useBuscarMetodosDePago } from "./useBuscarMetodosDePago";


const calcularRestosTotales = (calculoConTarifa, metodoEncontrado) => {

    const restante = metodoEncontrado.metodosDePago.reduce((acc, current) => acc - current.resto, calculoConTarifa)

    return calculoConTarifa == 0 ? 0 : restante

}

export const useRestanteTotal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { calculoConTarifa } = precioFinal

    const metodoEncontrado = useBuscarMetodosDePago()

    const restosTotales = useMemo(() => {
        return calcularRestosTotales(calculoConTarifa, metodoEncontrado)
    }, [calculoConTarifa, listaDeRestos])

    return { restosTotales }

}