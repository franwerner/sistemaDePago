const bucleDePuntuacion = (string = "", path = "") => {

    let puntaje = 0;
    let letrasConcatenadas = ""

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

    for (let i = 0; i < ruta.length; i++) {

        const letra = ruta[i]

        if (string.startsWith(letrasConcatenadas + letra) && letrasConcatenadas.length == i) {

            letrasConcatenadas += letra
        }
    }



    const validarCocatenacion = string.length == letrasConcatenadas.length ? 3 : 0

    const suma = puntaje + validarCocatenacion
    return suma

}

export default bucleDePuntuacion