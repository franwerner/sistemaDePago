import { useContext } from "react"
import { TarifaContex } from "../context/Contextos"




export const useCalculadoraPorcenje = (precio) => {
    
    const { tarifa } = useContext(TarifaContex)

    return (tarifa.tarifa / 100) * precio
  
}