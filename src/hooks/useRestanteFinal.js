import { useContext, useMemo } from "react";
import { useListadoFinalProducto } from "../hooks/useListadoFinalProducto";
import { TarifaContex, restoDelPagoContext } from "../context/Contextos";


export const useRestanteFinal = () => {

    const { listadoFinal } = useListadoFinalProducto()

    const { restoDelPago } = useContext(restoDelPagoContext)

    const restaFinal = useMemo(() => {

        const calculoResta = restoDelPago.reduce((acc, { resto = 0 }) => {

            return acc - resto

        }, listadoFinal.calculoSinTarifa)

        const calculoSuma = restoDelPago.reduce((acc, { resto }) => acc + resto, 0)

        return { calculoResta, calculoSuma }

    }, [restoDelPago, listadoFinal.calculoSinTarifa])




    return {
        restaFinal,
        listadoFinal,
    }


};
