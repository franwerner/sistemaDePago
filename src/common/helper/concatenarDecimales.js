import { obtenerDecimales } from "./obtenerDecimales";
import { verificarSiEsNegativo } from "./verificarSiEsNegativo";

export const concatenarDecimales = (anterior = 0, nuevo = 0) => {

    const entero = parseInt(anterior) + nuevo

    const decimales = obtenerDecimales(anterior)

    const isNegative = verificarSiEsNegativo(anterior) ? -Math.abs(entero) + decimales : entero + decimales

    return parseFloat(isNegative)
};