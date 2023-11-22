import { concatenacionDeRutas } from "../helper/concatenacionDeRutas";
import { splitDeRutasUtils } from "./splitDeRutasUtils";


const rutasBidimensionales = [//En cada raiz incrementar el indice + 1 por cada capa
    {
        raiz: "pos", indice: 0, subrutas: [
            [ //Esto es un capa  + 1
                "compras",
                "clientes",
                "almacen",

                {
                    raiz: "venta", indice: 1, subrutas: [
                        [
                            "pagos"
                        ]
                    ]
                },

                {
                    raiz: "productos", indice: 1, subrutas: [
                        [
                            "agregar",
                            { raiz: "pepe", indice: 2,  }
                        ]
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
    {
        raiz: "empleado", indice: 0, subrutas: []
    },
    {
        raiz: "sucursales", indice: 0, subrutas: []
    }

]

const verificarMapeo = (mapeo, objecto, key) => {

    const mapInfo = mapeo.get(key)

    if (mapInfo && objecto) {
        mapInfo.puntaje < objecto.puntaje && mapeo.set(key, objecto)
    } else if (!mapInfo && objecto) {
        mapeo.set(key, objecto)
    }

}

const bucleForLetra = (string = "", path = "") => {

    const ruta = path.toLocaleLowerCase()

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

    const porcentaje = Math.floor(((puntaje / string.length) * 100))

    const validarPorcentaje = porcentaje == 100 ? 1 : 0

    const validarCocatenacion = string.length == letrasConcatenadas.length ? 1 : 0


    if (letrasConcatenadas.length > 0 || porcentaje > 50) {

        const suma = puntaje + letrasConcatenadas.length + validarPorcentaje + validarCocatenacion

        return { string, puntaje: suma }
    }


}

const bucleBidimensional = (indiceActual, mapeoTest = new Map()) => {

    const rutas = splitDeRutasUtils();

    const { raiz = "", subrutas = [], indice = 0 } = indiceActual;

    const indiceAdelantado = indice + 1;

    const raizActual = bucleForLetra(raiz, rutas[indice]);

    raizActual && verificarMapeo(mapeoTest, raizActual, indice);


    for (const index of subrutas) {

        const indiceSubruta = index;

        if (indiceSubruta == undefined || !raizActual) break;


        for (let i = 0; i < indiceSubruta.length; i++) {

            const subrutaJ = indiceSubruta[i];

            if (typeof subrutaJ == "object") {

                const recursividad = bucleBidimensional(subrutaJ, mapeoTest);

            } else {

                const bucle = bucleForLetra(subrutaJ, rutas[indiceAdelantado]);
                bucle && verificarMapeo(mapeoTest, bucle, indiceAdelantado);
            }
        }
    }

    return mapeoTest
};

export const algoritmoDeBusquedaPageUtils = () => {


    let sistemaDePuntaje = [];

    for (const index of rutasBidimensionales) {

        const indiceActual = index

        const mapeoTest = bucleBidimensional(indiceActual)

        sistemaDePuntaje.push(mapeoTest)
    }

    const verificarMayorPuntaje = sistemaDePuntaje.reduce((mayor, actual) => {

        const arrays = [[...mayor.values()], [...actual.values()]].map((item) => {

            return item.reduce((acc, curren) => acc + curren.puntaje, 0)
        })

        return arrays[0] < arrays[1] ? actual : mayor

    }, sistemaDePuntaje[0])


    const newMap = [...verificarMayorPuntaje.entries()].sort((a, b) => {

        return a[0] - b[0]

    }).map(([_, b]) => b.string)


    return concatenacionDeRutas(newMap)
};
