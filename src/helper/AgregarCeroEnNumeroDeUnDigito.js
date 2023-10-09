export const AgregarCeroEnNumeroDeUnDigito = (numero) => {

    return numero.toString().length == 1 ? `0${numero}` : numero
}

