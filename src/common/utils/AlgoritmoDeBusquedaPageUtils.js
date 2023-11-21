import { concatenacionDeRutas } from "../helper/concatenacionDeRutas";
import { splitDeRutasUtils } from "./splitDeRutasUtils";


const rutasbidimensionales2 = [//En cada raiz incrementar el indice + 1 por cada capa
    {
        raiz: "pos", indice: 0, subrutas: [
            [ //Esto es un capa  + 1
                "compras",
                "clientes",
                "almacen",

                {
                    raiz: "ventas", indice: 1, subrutas: [
                        ["pagos"] //Esto es otra capa + 2
                    ]
                },

                {
                    raiz: "productos", indice: 1, subrutas: [
                        ["agregar",]
                    ]
                },

                {
                    raiz: "caja", indice: 1, subrutas: [
                        ["pagos"]
                    ]
                },
            ]
        ]
    },
    // {
    //     raiz: "empleado", indice: 0, subrutas: []
    // },
    // {
    //     raiz: "sucursales", indice: 0, subrutas: []
    // }

]


const verificarMapeo = (mapeo, objecto, key) => {

    const mapInfo = mapeo.get(key)

    if (mapInfo && objecto) {
        mapInfo.puntaje < objecto.puntaje && mapeo.set(key, objecto)
    } else if (!mapInfo && objecto) {

        mapeo.set(key, objecto)
    }

}


const bucleForLetra = (string = "", ruta = "") => {

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

        if (string.startsWith(letrasConcatenadas + letra)) {
            letrasConcatenadas += letra
        }
    }



    const porcentaje = Math.floor(((puntaje / string.length) * 100))

    const validarPorcentaje = porcentaje == 100 ? 1 : 0

    if (letrasConcatenadas.length == 0 && porcentaje < 50) return

    return { string, puntaje: puntaje + letrasConcatenadas.length + validarPorcentaje }
}

const bucleBidimensional = (indiceActual, mapeoTest = new Map()) => {

    const rutas = splitDeRutasUtils();
    const { raiz, subrutas, indice } = indiceActual

    const indiceAdelantado = indice + 1

    const raizActual = bucleForLetra(raiz, rutas[indice])

    for (let i = 0; i < subrutas.length; i++) {

        const indiceSubruta = subrutas[i]

        if (indiceSubruta == undefined || indiceAdelantado >= rutas.length) break

        for (let j = 0; j < indiceSubruta.length; j++) {

            const subrutaJ = indiceSubruta[j]

            if (typeof subrutaJ == "object") {

                const bucle = bucleBidimensional(subrutaJ, mapeoTest)

                bucle.forEach((valor, clave) => {
                    mapeoTest.set(clave, valor)
                });

            } else {

                const bucle = bucleForLetra(subrutaJ, rutas[indiceAdelantado])

                verificarMapeo(mapeoTest, bucle, indiceAdelantado)


            }

        }

    }


    verificarMapeo(mapeoTest, raizActual, indice)

    return mapeoTest

};

export const algoritmoDeBusquedaPageUtils = () => {


    let sistemaDePuntaje = [];

    for (let i = 0; i < rutasbidimensionales2.length; i++) {

        const indiceActual = rutasbidimensionales2[i]

        const mapeo = bucleBidimensional(indiceActual)

        mapeo.size > 0 && sistemaDePuntaje.push(mapeo)
    }

    const verificarMayorPuntaje = sistemaDePuntaje.reduce((mayor, actual) => {

        let valorMayor = 0
        let valorActual = 0

        mayor.forEach((valor) => {
            valorMayor += valor.puntaje
        })

        actual.forEach((valor) => {
            valorActual += valor.puntaje
        })

        return valorActual > valorMayor ? actual : mayor

    }, sistemaDePuntaje[0])

    const newMap = [...verificarMayorPuntaje.entries()].sort((a, b) => {

        return a[0] - b[0]

    }).map(([_, b]) => b.string)


    return concatenacionDeRutas(newMap)
};
