
export const obtenerDecimales = (numero) => {
    return "."+Math.round(Math.abs((numero * 100) % 100))
}