export const concatenacionDeRutas = (arrayDeRutas = []) => {

    let ruta = ""

    for (let i = 0; i < arrayDeRutas.length; i++) {

        ruta += "/"+arrayDeRutas[i];

    }

    return ruta

};