
import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";


const calcularCambio = (pagoActual, calculoConTarifa) => {

    const cambio = pagoActual.metodosDePago.reduce((acc, current) => (acc + current.resto), 0)

    const resultado = cambio - calculoConTarifa

    if (Math.sign(calculoConTarifa) == -1) return 0
    else if (cambio > calculoConTarifa) return resultado
    else return 0

}

export const useCambioTotal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { pagoActual } = useContext(restoDelPagoContext)

    const { calculoConTarifa } = precioFinal

    const cambioTotal = useMemo(() => {

        if (pagoActual == undefined) return 0

        return calcularCambio(pagoActual, calculoConTarifa)

    }, [calculoConTarifa, pagoActual])

    return { cambioTotal }

}