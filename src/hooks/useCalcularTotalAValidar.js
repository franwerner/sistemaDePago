import { useContext, useMemo } from "react";
import { useSumaTotalDeProductos } from "./useSumaTotalDeProductos";
import { restoDelPagoContext } from "../context/Contextos";

export const useCalcularTotalAValidar = () => {

    const { pagoActual } = useContext(restoDelPagoContext)

    const sumaDeProductos = useSumaTotalDeProductos()

    let restoInicial = sumaDeProductos

    return useMemo(() => {

        if (pagoActual == undefined) return

        const pagos = pagoActual.metodosDePago.map((current) => {

            const restoParaValidar = Math.min(restoInicial, current.resto);

            restoInicial -= current.resto

            return {
                ...current,
                "restoParaValidar": current.resto <= 0 ? (current.resto) : (restoParaValidar < 0 ? 0 : restoParaValidar)
            };
        });

        return pagos

    }, [pagoActual, sumaDeProductos]);


};