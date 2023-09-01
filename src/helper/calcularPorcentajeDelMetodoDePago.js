



export const calcularPorcentajeDelMetodoDePago = (numero, porcentaje) => {


    if (porcentaje <= 0) {
        return numero
    }

    else if (porcentaje >= 0) {

        return numero * (porcentaje / 100)
    }


}