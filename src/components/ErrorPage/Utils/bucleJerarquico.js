import { splitDeRutasUtils } from "@/common//utils/splitDeRutasUtils";
import bucleDePuntuacion from "./bucleDePuntuacion";

const sumarTotalRecursivo = (children) => {//Esto es total entre padre + suma del mayor children

    return children.reduce((mayorPuntaje, current) => {
        const puntaje = current.puntaje ? current.puntaje : 0
        const totalChildren = current.children ? sumarTotalRecursivo(current.children) : 0 //Esto contiene el resultado de los children anidados.

        return Math.max(mayorPuntaje, puntaje + totalChildren)
    }, 0)
}


const bucleJerarquico = (jerarquia = [], suma = -1) => {

    const rutas = splitDeRutasUtils();
    rutas.unshift("")

    suma++; //La suma se mantiene hasta el proximo nivel de jerarquia, por mas que se reinicie dentro del bucle, mantiene el estado anterior.
    // ejm : se matiene 1 hasta que en el capa 2 del mapeo se termine, entonces siempre sera uno hasta que pase al siguiente nivel de jerarquia

    const mapeo = jerarquia.map(item => {

        const puntaje = bucleDePuntuacion(item.nombre, rutas[suma], suma - 1)

        if (rutas.length <= suma + 1) return { ...item, puntaje, children: null };
        const bucle = bucleJerarquico(item.children, suma)

        return {
            ...item,
            puntaje: puntaje,
            total: bucle && sumarTotalRecursivo(bucle),
            children: bucle
                && [bucle.reduce((acc, current) => {
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


export default bucleJerarquico