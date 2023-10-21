
export const VerificarSiEsUnOperador = (valor) => {

    return ["+", "-", "/", "*"].includes(valor) ? true : false
};