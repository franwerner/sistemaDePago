
export const calcularRestosTotales = (calculoConTarifa, metodoEncontrado) => {


    if (!metodoEncontrado) return calculoConTarifa

    const restante = metodoEncontrado.metodosDePago.reduce((acc, current) => acc - current.resto, calculoConTarifa)

    return calculoConTarifa == 0 ? 0 : restante

}