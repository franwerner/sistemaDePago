
export const compararTarifaActual = (tarifa, tarifaActual) => {

    if (tarifa.tipoDeTarifa == tarifaActual.tipoDeTarifa) {
        return {
            background: "#88dc65",
            color: "white"
        }
    } else {
        return {}
    }
}