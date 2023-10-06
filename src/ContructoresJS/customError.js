
export class CustomError extends Error {
  constructor(codigo, motivo, tipo) {
    super(codigo, motivo, tipo)
    this.codigo = codigo
    this.motivo = motivo
    this.tipo = tipo
  }

}