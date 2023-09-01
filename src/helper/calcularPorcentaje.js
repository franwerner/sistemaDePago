



export const calcularPorcentaje = (numero, porcentaje) => {



    if (porcentaje < 0) {
        return Math.abs((numero * (Math.abs(porcentaje) / 100)) - numero)
    }

    else if (porcentaje >= 0) {

        return numero * (porcentaje / 100) + numero
    }


}