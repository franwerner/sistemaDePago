import { splitDeRutasUtils } from "./splitDeRutasUtils";

const rutasAnidaas = [
    [
        {
            nombre: "pos", children:
                [
                    { nombre: "compras" },
                    { nombre: "almacen" },
                    { nombre: "caja", children: [{ nombre: "pagos" }] },
                    {
                        nombre: "venta", children:
                            [
                                { nombre: "pagos" },
                            ]
                    },
                    {
                        nombre: "productos", children: [
                            {
                                nombre: "agregar", children: [{ nombre: "pene" }],
                            },
                            {
                                nombre: "zuc"
                            }
                        ]
                    },

                ]
        }
    ],
    [
        { nombre: "empleados" }
    ]
]

const bucleForLetra = (string = "", path = "") => {

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

const sumarTotalRecursivo = (children) => {

    return children.reduce((acc, current) => {
        const puntaje = current.puntaje ? current.puntaje : 0
        const recursividad = current.children ? sumarTotalRecursivo(current.children) : 0
        return acc + puntaje + recursividad
    }, 0)

}


const bucleBidimensional = (jerarquia = [], suma = -1) => {

    const rutas = splitDeRutasUtils();

    suma++; //La suma se mantiene hasta el proximo nivel de jerarquia, por mas que se reinicie dentro del bucle, manteiene el estado anterior.
    // ejm : se matiene 1 hasta que en el capa 2 del mapeo se termine, entonces siempre sera uno hasta que pase al siguiente nivel de jerarquia

    const mapeo = jerarquia.map(item => {

        const puntaje = bucleForLetra(item.nombre, rutas[suma])

        if (rutas.length <= suma + 1) return { ...item, puntaje, total: puntaje, children: null };
        const bucle = bucleBidimensional(item.children, suma)
        return {
            ...item,
            puntaje,
            total: bucle && sumarTotalRecursivo(bucle),
            children: bucle && [bucle.reduce((acc, current) => {
                const { total: totalAcc = 0, puntaje: puntajeAcc = 0 } = acc
                const { total = 0, puntaje = 0 } = current
                const accTotal = totalAcc + puntajeAcc
                const currentTotal = total + puntaje

                return accTotal > currentTotal || puntaje == 0 ? acc : current

            }, {})]
        }
    })

    return mapeo
};



const encontrarPuntajeMasAlto = (date) => {

    let suma = date[0].puntaje || 0
    for (const key of date) {
        if (key.children) {
            suma += encontrarPuntajeMasAlto(key.children);
        }
    }
    return suma
}

export const algoritmoDeBusquedaPageUtils = () => {

    let sumaActual = 0
    let rutaActual = []

    const sistemaDePuntaje = rutasAnidaas
        .map(item => {
            const bucle = bucleBidimensional(item)[0]
            const hijo = bucle.children[0].total
            const puntaje = bucle.puntaje
            const verificarHijo = hijo ? hijo + puntaje : puntaje
            return [{ ...bucle, total: verificarHijo }] //Se suman el valor real del hijo mas cercano y el puntaje de la capa 1
        })

    for (const iterator of sistemaDePuntaje) {

        const search = encontrarPuntajeMasAlto(iterator)

        const mathMax = Math.max(sumaActual, search)
        if (mathMax > sumaActual) {
            rutaActual = iterator
            sumaActual = mathMax
        }
    }

    const concatenacionRecursiva = (date) => {

        let concatenacion = typeof date[0] == "object" ? date[0].nombre || "" : ""

        for (const iterator of date) {
            if (!iterator.children) return concatenacion
            concatenacion += "/" + concatenacionRecursiva(iterator.children);

        }

        return concatenacion
    }


    return concatenacionRecursiva(rutaActual)

};
