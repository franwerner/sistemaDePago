export const concatenacionDeRutas = (posicion,arrayRutas) => {

    let rutaNueva = ""

    for (let i = 0; i < arrayRutas.length; i++) {
        if (i > posicion) break
        rutaNueva += `/${arrayRutas[i]}`

    }

    return rutaNueva
}
