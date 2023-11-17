
export const VerificarSiEsUnOperador = (valor) => {

    return ["+", "-", "/", "*"].includes(valor)
};