import { useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";

export const useCalcularCambio = ({ pagoEncontrado }) => {

    const dependeciaString = JSON.stringify(pagoEncontrado)

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { calculoSinTarifa } = precioFinal

    return useMemo(() => {

        if (!pagoEncontrado) return 0

        const resta = pagoEncontrado.metodosDePago.reduce((acc, current) => acc - current.resto, calculoSinTarifa)

        const verificarSiEsCambio = Math.sign(resta) == -1 ? resta : 0

        return Math.abs(verificarSiEsCambio)

    }, [dependeciaString, calculoSinTarifa])

}