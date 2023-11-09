import { useContext, useMemo } from "react";
import { useSumaTotalDeProductos } from "./useSumaTotalDeProductos";
import { restoDelPagoContext } from "../context/Contextos";
import { verificarSiEsNegativo } from "../helper/verificarSiEsNegativo";
import { useCalcularCambio } from "./useCalcularCambioTotal";

export const useCalcularTotalAValidar = () => {

    const { pagoActual } = useContext(restoDelPagoContext)

    const sumaDeProductos = useSumaTotalDeProductos()

    let cambio = useCalcularCambio()


    let restoInicial = sumaDeProductos

    return useMemo(() => {

        if (pagoActual == undefined) return

        const pagos = pagoActual.metodosDePago.map((current) => {

            restoInicial -= current.resto

            const max = Math.max(restoInicial, current.resto)


            const verificarRestoInicial = verificarSiEsNegativo(restoInicial) ? Math.abs(restoInicial) : 0

            const verificarProductos = verificarSiEsNegativo(sumaDeProductos) ? 0 : verificarRestoInicial

            const IsNegativo = verificarSiEsNegativo(current.resto) || current.resto == 0 ? current.resto : max 


            console.log(IsNegativo)

            return {
                ...current,
                "validar": current.tipo !== "efectivo" ? IsNegativo + cambio : IsNegativo - cambio
            };
        });

        return pagos

    }, [pagoActual, sumaDeProductos]);


};