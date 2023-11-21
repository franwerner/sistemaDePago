export const establecerLargoMaximo = ({ numero = 0, max = 10 }) => {

    const numeroEnteroString = Math.trunc(numero).toString()

    const resultado = numeroEnteroString.length >= max ? numeroEnteroString.slice(0, max) : numero

    return parseFloat(resultado)

};