import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { TarifaContex, restoDelPagoContext } from "../context/Contextos";


export const useRestanteFinal = () => {
    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { tarifaActual } = useContext(TarifaContex)

    const { restoDelPago } = useContext(restoDelPagoContext)

    const { calculoSinTarifa } = precioFinal

    const { porcentaje } = tarifaActual


    


    const restaFinal = useMemo(() => {

      let calculoResta = calculoSinTarifa

        const resultado = restoDelPago.forEach(pago => {

            if (!pago.listaDeMetodos) return

            calculoResta = pago.listaDeMetodos.reduce((acc, { resto = 0 }) => {
                return Math.abs(acc - resto)
            }, calculoSinTarifa)

        })


        const calculoSuma = 0

        // const calculoSuma = restoDelPago.reduce((acc, { resto = 0 }) => {

        //     const calcularPorcentaje = (acc + resto) * (porcentaje / 100)

        //     return acc + resto + calcularPorcentaje

        // }, 0)

        return { calculoResta, calculoSuma }

    }, [restoDelPago, calculoSinTarifa])





    return {
        restaFinal
    }


};
