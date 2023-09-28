import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";


export const useRestanteTotal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { listaDePagos, pagoActual } = useContext(restoDelPagoContext)

    const { calculoSinTarifa } = precioFinal

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)


    const restoTotal = useMemo(() => {

        const sumaDeMetodosAgreagos = Object.entries(listaDePagos).map(([key, value]) => {
            return value.metodosDePago.reduce((acc, current) => acc - current.resto, 0)
        })

        const sumaDeRestos = sumaDeMetodosAgreagos.reduce((acc, current) => acc + current, calculoSinTarifa)

        if (pagoActual.cambio > 0 || pagoActual == undefined) return 0

        return sumaDeRestos

    }, [calculoSinTarifa, dependeciaString])

    return {
        restoTotal
    }

}