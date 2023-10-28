import { useMemo } from "react";
import { useSumaTotalDeProductos } from "./useSumaTotalDeProductos";

export const useSumarMetodosDePagoAgregados = ({ pagoEncontrado }) => {

    const sumaDeProductos = useSumaTotalDeProductos()

    const dependeciaString = JSON.stringify(pagoEncontrado == undefined ? "" : pagoEncontrado.metodosDePago)

    let restoInicial = sumaDeProductos

    return useMemo(() => {

        if (pagoEncontrado == undefined) return

        const pagos = pagoEncontrado.metodosDePago.map((current) => {

            const restoParaValidar = Math.min(restoInicial, current.resto);
            restoInicial -= current.resto

            return {
                ...current,
                "restoParaValidar": current.resto <= 0 ? current.resto : restoParaValidar < 0 ? 0 : restoParaValidar
            };
        });

        return pagos

    }, [dependeciaString, sumaDeProductos]);

};