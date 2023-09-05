
export const calcularCambioTotal = (metodoEncontrado,calculoConTarifa) => {

    if (!metodoEncontrado) return 0

    const cambio = metodoEncontrado.metodosDePago.reduce((acc, current) => (acc + current.resto), 0)

    const resultado = cambio - calculoConTarifa

    if (Math.sign(calculoConTarifa) == -1) return 0
    else if (cambio > calculoConTarifa) return resultado
    else return 0

}