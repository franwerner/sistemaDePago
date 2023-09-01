



export const calcularPorcentajeDelMetodoDePago = (numero, porcentaje) => {


    if (porcentaje <= 0) {
        return 0
    }

    else if (porcentaje >= 0) {

        return numero * (porcentaje / 100)
    }


}