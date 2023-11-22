import { splitDeRutasUtils } from "./splitDeRutasUtils";


const rutasBidimensionales = [//En cada raiz incrementar el indice + 1 por cada capa
    {
        raiz: "pos", indice: 0, subrutas: [
            //Esto es un capa  + 1
            "compras", // 10
            "clientes",
            "almacen",
            {
                raiz: "venta", indice: 1, subrutas: [
                    "pagos"
                ]
            },

            {
                raiz: "productos", indice: 1, subrutas: [// 5
                    "agregar", // 6
                    {
                        raiz: "pepe", indice: 2, subrutas: [ // 3
                            "test" //5
                        ]
                    }
                ]
            },

            {
                raiz: "caja", indice: 1, subrutas: [
                    "pagos"
                ]
            },

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

    const letraLength = letrasConcatenadas.length

    const porcentaje = Math.floor(((puntaje / string.length) * 100))

    const validarPorcentaje = porcentaje == 100 ? 1 : 0

    const validarCocatenacion = string.length == letraLength ? 1 : 0


    if (letraLength > 0 || (porcentaje > 50)) {

        const suma = puntaje + letraLength + validarPorcentaje + validarCocatenacion

        return { string, puntaje: suma }
    }


}

const bucleBidimensional = (indiceActual, mapeoDePuntajes = new Map()) => {

    const rutas = splitDeRutasUtils();

    const { raiz = "", subrutas = [], indice = 0 } = indiceActual;

    const indiceAdelantado = indice + 1;

    const raizActual = bucleForLetra(raiz, rutas[indice]);

    raizActual && verificarMapeo(mapeoDePuntajes, raizActual, indice);

    for (const index of subrutas) {

        const indiceSubruta = index;

        if (indiceSubruta == undefined || !raizActual) break;

        else if (typeof index == "object") {

            const recursividad = bucleBidimensional(index, mapeoDePuntajes);

        } else if (mapeoDePuntajes.get(indice).string == raiz) {//En caso de que la raizActual sea valida, pero no este insertada en el mapeo

            const bucle = bucleForLetra(index, rutas[indiceAdelantado]);

            bucle && verificarMapeo(mapeoDePuntajes, bucle, indiceAdelantado);

        }

    }

    return mapeoDePuntajes
};

export const algoritmoDeBusquedaPageUtils = () => {

    const sistemaDePuntaje = rutasBidimensionales.map(item => bucleBidimensional(item)).filter(item => item.size !== 0)


    const verificarMayorPuntaje = sistemaDePuntaje.reduce((mayor, actual) => {

        const arrays = [[...mayor.values()], [...actual.values()]].map((item) => {

            return item.reduce((acc, curren) => acc + curren.puntaje, 0)
        })

        return arrays[0] < arrays[1] ? actual : mayor

    }, sistemaDePuntaje[0])


    const newMap = [...verificarMayorPuntaje.entries()].map(([_, b]) => b.string)

    return newMap
};
