export const agregarCeroEnLaHora = (numero) => {

    return numero.toString().length == 1 ? `0${numero}` : numero
}

