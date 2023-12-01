const bucleDePuntuacion = (string = "", path = "", nivelJerarquico) => {

    let puntaje = 0;

    const ruta = path.toLocaleLowerCase()

    const [mapeoLetrasString, mapeoLetrasRuta] = [string, ruta].reduce((mapa, letra, indice) => {

        for (const iterator of letra) {
            mapa[indice].set(iterator, (mapa[indice].get(iterator) || 0) + 1);
        }
        return mapa;

    }, [new Map(), new Map()])

    for (const [letra, cantidadEnRuta] of mapeoLetrasRuta.entries()) {

        const cantidadEnString = mapeoLetrasString.get(letra);

        cantidadEnString && (puntaje += Math.min(cantidadEnRuta, cantidadEnString)) //Se evalua en base a la ruta mal escrita, cuanto de esas letra estan en string(ruta original).
    }

    const letrasConcatenadas = path.split("").reduce((acc, current, index) => string.startsWith(acc + current) && acc.length == index ? acc += current : acc, "")

    const validarCocatenacion = string.length == letrasConcatenadas.length ? 5 : 0

    const suma = puntaje + validarCocatenacion

    const resultado = (suma + letrasConcatenadas.length) - nivelJerarquico * 1.5


    if (puntaje == 0) {
        return 0
    } else if (Math.sign(resultado) == -1 || resultado == 0) {
        return   letrasConcatenadas.length
    } else {
        return resultado
    }

}

export default bucleDePuntuacion