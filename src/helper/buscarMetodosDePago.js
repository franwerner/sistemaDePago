import { useContext } from "react";
import { TarifaContex, restoDelPagoContext } from "../context/Contextos";

export const buscarMetodosDePago = () => {
    const { listaDeRestos } = useContext(restoDelPagoContext)
    
    const { tarifaActual } = useContext(TarifaContex)

    if (!listaDeRestos) return []

    const { tipoDeTarifa } = tarifaActual

    return listaDeRestos.find(r => r.tipoDeTarifa == tipoDeTarifa)

};