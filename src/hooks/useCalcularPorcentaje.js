import React, { useContext } from "react"
import { TarifaContex } from "../context/Contextos"
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales"


export const useCalculadoraPorcenje = (numero) => {

    const { tarifaActual } = useContext(TarifaContex)

    return (tarifaActual.porcentaje / 100) * numero

}

export const CalcularPorcentajeMemoizado = React.memo(({ n1, n2 = 0 }) => {//n2 sirve para indicar en el prop si queremos sumarle el numero sin porcentaje.

    const porcentaje = useCalculadoraPorcenje(n1)

    return separarNumerosConDecimales(porcentaje + n2)

})