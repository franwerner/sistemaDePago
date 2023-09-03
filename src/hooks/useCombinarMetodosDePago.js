import { useContext } from "react"
import { TarifaContex, restoDelPagoContext } from "../context/Contextos"
import { buscarMetodosDePago } from "../helper/buscarMetodosDePago"

export const useCombinarMetodosDePago = () => {

    const { tarifaActual } = useContext(TarifaContex)

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const resultadoDelMetodo = buscarMetodosDePago(tarifaActual, listaDeRestos)

    const { metodosDePago } = tarifaActual

    const combinarMetodoDePago = metodosDePago.map(itemA => {

        if (listaDeRestos.length == 0 || !resultadoDelMetodo) return itemA

        const agregado = resultadoDelMetodo.metodosDePago.find(itemB => itemB.nombre == itemA.nombre)

        return agregado ? Object.assign({}, itemA, agregado) : itemA
    })


    return {
        combinarMetodoDePago
    }
}
