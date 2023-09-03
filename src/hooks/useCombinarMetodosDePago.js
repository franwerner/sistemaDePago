import { useContext } from "react"
import { TarifaContex, restoDelPagoContext } from "@/context/Contextos"
import { useBuscarMetodosDePago } from "./useBuscarMetodosDePago"

export const useCombinarMetodosDePago = () => {

    const { tarifaActual } = useContext(TarifaContex)

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { metodoEncontrado } = useBuscarMetodosDePago()

    const { metodosDePago } = tarifaActual

    const combinarMetodoDePago = metodosDePago.map(itemA => {

        if (listaDeRestos.length == 0 || !metodoEncontrado) return itemA

        const agregado = metodoEncontrado.metodosDePago.find(itemB => itemB.nombre == itemA.nombre)

        return agregado ? Object.assign({}, itemA, agregado) : itemA
    })


    return {
        combinarMetodoDePago
    }
}
