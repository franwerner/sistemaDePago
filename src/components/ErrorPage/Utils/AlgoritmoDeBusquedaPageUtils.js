import historialDeRutas from "./historialDeRutas";
import bucleJerarquico from "./bucleJerarquico";

const concatenacionRecursiva = (date) => {

    let concatenacion = typeof date[0] == "object" ? date[0].nombre || "" : ""

    for (const iterator of date) {
        if (!iterator.children) return concatenacion
        concatenacion += "/" + concatenacionRecursiva(iterator.children);
    }

    return concatenacion
}


export const algoritmoDeBusquedaPageUtils = () => {

    const sistemaDePuntaje = bucleJerarquico(historialDeRutas)
    return concatenacionRecursiva(sistemaDePuntaje[0].children)

};
