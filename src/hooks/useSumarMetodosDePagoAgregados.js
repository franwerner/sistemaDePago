import { useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";


export const useSumarMetodosDePagoAgregados = ({ pagoEncontrado }) => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { calculoConTarifa } = precioFinal

    const dependeciaString = JSON.stringify(pagoEncontrado == undefined ? "" : pagoEncontrado.metodosDePago)

    let restoInicial = calculoConTarifa


    return useMemo(() => {

        if (pagoEncontrado == undefined) return

        const a = pagoEncontrado.metodosDePago.map((current) => {

            const restoParaValidar = Math.min(restoInicial, current.resto);

            restoInicial -= current.resto

            return {
                ...current,
                "restoParaValidar": Math.sign(restoParaValidar) == -1 ? 0 : restoParaValidar,
            };
        });

        return a

    }, [dependeciaString, calculoConTarifa]);

};