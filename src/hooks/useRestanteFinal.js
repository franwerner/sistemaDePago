import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "../context/Contextos";


export const useRestanteFinal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { calculoSinTarifa } = precioFinal

    const { restoDelPago } = useContext(restoDelPagoContext)

    const restaFinal = useMemo(() => {

        const calculoResta = restoDelPago.reduce((acc, { resto = 0 }) => Math.abs(acc - resto), calculoSinTarifa)

        const calculoSuma = restoDelPago.reduce((acc, { resto, porcentaje = 0 }) => {

            return acc + resto + porcentaje

        }, 0)

        return { calculoResta, calculoSuma }

    }, [restoDelPago,calculoSinTarifa])




    return {
        restaFinal
    }


};
