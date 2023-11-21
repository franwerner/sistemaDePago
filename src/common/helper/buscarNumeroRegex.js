
export const buscarNumeroRegex = (valor) => {

    const regExp = (/^[0-9]$/)
    console.log(regExp)

    return valor.match(regExp)[0]


}