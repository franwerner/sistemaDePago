import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { useCambioTotal } from "./useCambioTotal";


const calcularRestosTotales = (calculoConTarifa, pagoActual) => {

    return pagoActual.metodosDePago.reduce((acc, current) => acc - current.resto, calculoConTarifa)

}

export const useRestanteTotal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { pagoActual } = useContext(restoDelPagoContext)

    const { calculoConTarifa } = precioFinal

    const { cambioTotal } = useCambioTotal()

    const restosTotales = useMemo(() => {

        if (cambioTotal > 0 || pagoActual == undefined) return 0

        return calcularRestosTotales(calculoConTarifa, pagoActual)
    }, [calculoConTarifa, pagoActual])

    return { restosTotales }

}