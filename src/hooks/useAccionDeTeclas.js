import { useContext } from "react"
import { productoReducerContext } from "../context/Contextos"


export const usebackSpace = (valor = {}) => {

    const { eliminarProducto } = useContext(productoReducerContext)

    const backSpace = (e) => {

        if (e.key === "Backspace") {

            eliminarProducto(valor)

        }
    }
    return { backSpace }

}
