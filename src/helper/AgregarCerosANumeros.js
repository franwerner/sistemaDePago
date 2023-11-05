export const AgregarCerosANumeros = ({ numero = 1, digitos = 1 }) => {

    const retonarCeros = (largo) => {

        let cero = ""

        for (let index = 0; index < largo; index++) {
            cero += "0"
        }

        return cero
    }

    if (numero.toString().length !== digitos) {
        return retonarCeros(digitos - numero.toString().length) + numero
    } else {
        return numero
    }


}

