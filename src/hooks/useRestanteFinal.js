import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { useBuscarMetodosDePago } from "./useBuscarMetodosDePago";

export const useRestanteFinal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { calculoSinTarifa, calculoConTarifa } = precioFinal

    const { metodoEncontrado } = useBuscarMetodosDePago()


    const cambioTotal = useMemo(() => {

        if (!metodoEncontrado) return 0

        const cambio = metodoEncontrado.metodosDePago.reduce((acc, current) => (acc + current.resto), 0)

        const resultado = cambio - calculoConTarifa

        if (Math.sign(calculoConTarifa) == -1) return 0
        else if (cambio > calculoConTarifa) return resultado
        else return 0

    }, [calculoSinTarifa, listaDeRestos])


    const restosTotales = useMemo(() => {

        if (!metodoEncontrado) return calculoConTarifa

        const restante = metodoEncontrado.metodosDePago.reduce((acc, current) => acc - current.resto, calculoConTarifa)

        return cambioTotal > 0 ? 0 : restante

    }, [calculoSinTarifa, listaDeRestos])





    return {
        restosTotales,
        cambioTotal
    }


};
