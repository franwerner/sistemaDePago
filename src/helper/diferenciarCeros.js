
export const diferenciarCeros = (cero) => {
    if ((1 / cero) == (-Infinity)) {
        return true
    }
    else {
        return false
    }
}