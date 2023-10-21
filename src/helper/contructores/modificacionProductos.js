import { SwitchBotonesTactiles } from "./switchBotonesTactiles"


export class ModificacionProductos extends SwitchBotonesTactiles {

    constructor(resto, tipo,comma) {
        super(resto, tipo,comma)
    }

    switchBtn() {

        switch (this.tipo) {

            case "Backspace": {
            
                if (this.resto == 0) return null

            }

            default: return super.switchBtn()
        }
    }

}
