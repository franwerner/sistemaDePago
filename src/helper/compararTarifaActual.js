
export const compararTarifaActual = (tarifa, tarifaActual) => {

    if (tarifa.tipoDePago == tarifaActual.tipoDePago) {
        return {
            background: "#88dc65",
            color: "white"
        }
    } else {
        return {}
    }
}