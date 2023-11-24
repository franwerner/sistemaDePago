import { splitDeRutasUtils } from "@/common//utils/splitDeRutasUtils";
import bucleDePuntuacion from "./bucleDePuntuacion";

const sumarTotalRecursivo = (children) => {

    return children.reduce((acc, current) => {
        const puntaje = current.puntaje ? current.puntaje : 0
        const recursividad = current.children ? sumarTotalRecursivo(current.children) : 0
        return acc + puntaje + recursividad
    }, 0)

}

const bucleJerarquico = (jerarquia = [], suma = -1) => {

    const rutas = splitDeRutasUtils();

    suma++; //La suma se mantiene hasta el proximo nivel de jerarquia, por mas que se reinicie dentro del bucle, manteiene el estado anterior.
    // ejm : se matiene 1 hasta que en el capa 2 del mapeo se termine, entonces siempre sera uno hasta que pase al siguiente nivel de jerarquia

    const mapeo = jerarquia.map(item => {

        const puntaje = bucleDePuntuacion(item.nombre, rutas[suma],suma)

        if (rutas.length <= suma + 1) return { ...item, puntaje, children: null };
        const bucle = bucleJerarquico(item.children, suma)
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


export default bucleJerarquico