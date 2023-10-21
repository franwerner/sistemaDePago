import { verificarSiEsNegativo } from "../verificarSiEsNegativo";
import { UtilsModificacionDeNumeros } from "./utilsModificacionDeNumeros"

export class SwitchBotonesTactiles {

    constructor(resto, tipo, comma) {
        this.resto = resto
        this.tipo = tipo
        this.comma = comma
        this.utils = new UtilsModificacionDeNumeros(this.resto, this.tipo);
    }

    switchBtn() {
        const buscarSignoMas = this.tipo.indexOf("+")

        const { agregarDecimales, agregarNumeros, borrarDecimales, borrarEnteros, sumarNumeros } = this.utils


        switch (this.tipo) {
            case "+/-": {
                const verificar = verificarSiEsNegativo(this.resto)
                
                if (verificar) {
                    return Math.abs(this.resto)
                } else {
                    return -this.resto
                }
            }

            case "Backspace":
                if (this.comma == false) {

                    return borrarEnteros()

                } else {
                    return borrarDecimales()
                }

            case buscarSignoMas == -1 && !isNaN(this.tipo) && this.tipo:

                if (this.comma) {
                    return agregarDecimales()
                } else {
                    return agregarNumeros()
                }

            case buscarSignoMas == 0 && !isNaN(this.tipo) && this.tipo:
                const numero = parseFloat(this.tipo.slice(1))

                return sumarNumeros({ numero })

            default:

                return isNaN(this.resto) ? 0 : this.resto
        }

    }

}


