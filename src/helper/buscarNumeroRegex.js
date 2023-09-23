
export const buscarNumeroRegex = (valor) => {

    const regExp = (/^[0-9]$/)

    return valor.match(regExp)[0]


}