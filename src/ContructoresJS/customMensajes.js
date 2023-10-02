
export class CustomMensajes extends error {
    constructor(mensaje, codigo, tipo) {
        this.mensaje = mensaje
        this.codigo = codigo
        this.tipo = tipo
    }
}