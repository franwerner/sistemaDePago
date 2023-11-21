import { diferenciarCeros } from "./diferenciarCeros"

export const verificarSiEsNegativo = (resto) => {
    const signo = Math.sign(resto)
    return signo == -1 || diferenciarCeros(signo) ? true : false
}
