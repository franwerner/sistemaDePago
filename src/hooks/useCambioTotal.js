
import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { useBuscarMetodosDePago } from "./useBuscarMetodosDePago";
import { calcularCambioTotal } from "@/helper/calcularCambioTotal";


export const useCambioTotal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { calculoConTarifa } = precioFinal

    const { metodoEncontrado } = useBuscarMetodosDePago()


    const cambioTotal = useMemo(() => {

        return calcularCambioTotal(metodoEncontrado, calculoConTarifa)

    }, [calculoConTarifa, listaDeRestos])

    return { cambioTotal }

}