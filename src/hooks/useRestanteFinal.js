import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "../context/Contextos";

export const useRestanteFinal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { calculoSinTarifa } = precioFinal



    const restosTotales = useMemo(() => {

        let restaTotal = calculoSinTarifa;

        listaDeRestos.forEach(lista => {

            restaTotal -= lista.metodosDePago.reduce((acc, current) => {

                return acc + current.resto
            }, 0);
        });

        return restaTotal;


    }, [calculoSinTarifa, listaDeRestos])

    const cambioTotal = useMemo(() => {

        let cambioTotal = 0

        listaDeRestos.forEach(lista => {

            cambioTotal += lista.metodosDePago.reduce((acc, current) => {

                return (acc + current.resto)

            }, 0)

        })


        return restosTotales > 1 ? 0 : (cambioTotal - calculoSinTarifa)

    }, [calculoSinTarifa, listaDeRestos])


    const sumaTotal = useMemo(() => {

        let sumaTotal = 0

        listaDeRestos.forEach(lista => {

            sumaTotal += lista.metodosDePago.reduce((acc, current) => {

                return (acc + current.resto + current.porcentaje)

            }, 0)

        })

        return sumaTotal

    }, [calculoSinTarifa, listaDeRestos])



    return {
        restosTotales,
        sumaTotal,
        cambioTotal
    }


};
