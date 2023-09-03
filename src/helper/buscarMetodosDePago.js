
export const buscarMetodosDePago = (tarifaActual, listaDeRestos) => {
    
    if(!listaDeRestos) return

    const { tipoDeTarifa } = tarifaActual

    return listaDeRestos.find(r => r.tipoDeTarifa == tipoDeTarifa)

};