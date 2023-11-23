import { concatenacionDeRutas } from "../helper/concatenacionDeRutas";
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
                                nombre: "agregar",
                            },
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

    const ruta = path.toLocaleLowerCase()

    // console.log(`${string} - ${path}`)

    const [mapeoLetrasString, mapeoLetrasRuta] = [string, ruta].reduce((mapa, letra, indice) => {

        for (const iterator of letra) {
            mapa[indice].set(iterator, (mapa[indice].get(iterator) || 0) + 1);
        }
        return mapa;

    }, [new Map(), new Map()])

    let puntaje = 0;
    let letrasConcatenadas = ""

    for (const [letra, cantidadEnRuta] of mapeoLetrasRuta.entries()) {

        if (mapeoLetrasString.has(letra)) {
            const cantidadEnString = mapeoLetrasString.get(letra);
            puntaje += Math.min(cantidadEnRuta, cantidadEnString);
        }
    }

    for (let i = 0; i < ruta.length; i++) {

        const letra = ruta[i]

        if (string.startsWith(letrasConcatenadas + letra) && letrasConcatenadas.length == i) {

            letrasConcatenadas += letra
        }
    }

    const letraLength = letrasConcatenadas.length

    const porcentaje = Math.floor(((puntaje / string.length) * 100))

    const validarPorcentaje = porcentaje == 100 ? 1 : 0

    const validarCocatenacion = string.length == letraLength ? 3 : 0

    const suma = puntaje + letraLength + validarPorcentaje + validarCocatenacion

    return suma

}

const bucleBidimensional = (jerarquia = [], suma = -1, total = 0) => {

    const rutas = splitDeRutasUtils();

    suma++; //La suma se mantiene hasta el proximo nivel de jerarquia, por mas que se reinicie dentro del bucle, manteiene el estado anterior.

    const mapeo = jerarquia.map(item => {

        const puntaje = bucleForLetra(item.nombre, rutas[suma])

        if (rutas.length <= suma + 1) return { ...item, puntaje, children: null };
        const bucle = bucleBidimensional(item.children, suma, total)

        return {
            ...item,
            puntaje,
            total: bucle.reduce((acc, current) => {
                total += current.puntaje
                return acc + current.puntaje
            }, 0),
            children: [bucle.reduce((acc, current) => {
                const { total: totalAcc = 0, puntaje: puntajeAcc = 0 } = acc
                const { total = 0, puntaje = 0 } = current
                const accTotal = totalAcc + puntajeAcc
                const currentTotal = total + puntaje

                return accTotal > currentTotal ? acc : current
            }, {})]
        }
    })

    return mapeo
};

const encontrarPuntajeMasAlto = (date) => {

    let suma = date.puntaje;

    for (const key of date.children) {

        if (typeof date.children[key] == "object") {
            suma += encontrarPuntajeMasAlto(date.children);
        }
    }
    return suma

}

export const algoritmoDeBusquedaPageUtils = () => {

    let sumaActual = 0
    let rutaActual = ""
    const sistemaDePuntaje = rutasAnidaas
        .map(item => bucleBidimensional(item))


    for (const iterator of sistemaDePuntaje) {
        const a = encontrarPuntajeMasAlto(iterator[0])
        const mathMax = Math.max(sumaActual, a)
        if (mathMax > sumaActual) {
            rutaActual = iterator
            sumaActual = mathMax
        }
    }



    const concatenacionRecursiva = (date) => {

        let concatenacion = date[0].nombre

        for (const iterator of date) {
            if(!iterator.children) return concatenacion
            concatenacion += "/" + concatenacionRecursiva(iterator.children);
            
        }

        return concatenacion
    }


    return concatenacionRecursiva(rutaActual)

};
