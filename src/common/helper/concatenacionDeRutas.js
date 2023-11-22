export const concatenacionDeRutas = (arrayDeRutas = []) => {

    let ruta = ""

    for (let i = 0; i < arrayDeRutas.length; i++) {

        const diagonal = i > 0 ? "/" : ""

        ruta += diagonal + arrayDeRutas[i];

    }

    return ruta

};