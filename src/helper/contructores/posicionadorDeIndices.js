
export class PosicionadorDeIndices {
    constructor(array = [], elementoAPosicionar = {}, propiedadDeComparacion = "id") {
        this.array = array
        this.elementoAPosicionar = elementoAPosicionar
        this.propiedadDeComparacion = propiedadDeComparacion
    }

    obtenerIndice() {

        return this.array.findIndex(item => item[this.propiedadDeComparacion] == this.elementoAPosicionar[this.propiedadDeComparacion])
    }

    posicionar() {
        const indice = this.obtenerIndice()

        this.array.splice(indice, 1, this.elementoAPosicionar)

        return this.array
    }

}