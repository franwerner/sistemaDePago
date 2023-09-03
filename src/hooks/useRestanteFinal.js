import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { TarifaContex, restoDelPagoContext } from "../context/Contextos";
import { buscarMetodosDePago } from "../helper/buscarMetodosDePago";

export const useRestanteFinal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { tarifaActual } = useContext(TarifaContex)


    const resultadoDelMetodo = buscarMetodosDePago(tarifaActual, listaDeRestos)

    // console.log(resultadoDelMetodo)

    const { calculoSinTarifa } = precioFinal

    const { porcentaje } = tarifaActual


    const restosTotales = useMemo(() => {

        let restaTotal = calculoSinTarifa;

        listaDeRestos.forEach(lista => {
            restaTotal -= lista.metodosDePago.reduce((acc, current) => {

                return acc + current.resto;
            }, 0);
        });

        return restaTotal;

    }, [calculoSinTarifa, listaDeRestos,porcentaje])


    const calculoResta = useMemo(() => {

        if (!resultadoDelMetodo) return calculoSinTarifa

        return resultadoDelMetodo.metodosDePago.reduce((acc, current) => {

            return acc - current.resto

        }, calculoSinTarifa)

    }, [resultadoDelMetodo, calculoSinTarifa])


    const restaFinal = useMemo(() => {

        let calculoSuma = 0

        return { calculoSuma }

    }, [resultadoDelMetodo, calculoSinTarifa])


    // console.log(restosTotales)
    // console.log(calculoResta)

    return {
        calculoResta,
        restosTotales
    }


};
