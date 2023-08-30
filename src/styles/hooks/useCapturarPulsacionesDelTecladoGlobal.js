import { useContext, useEffect } from "react"
import { productoReducerContext } from "../context/Contextos"
import { useDetectarElementoEnFocos } from "./useDetectarElementoEnFoco"


export const useCapturarPulsacionesDelTecladoGlobal = (seleccion = {}) => {

    const { eliminarProducto } = useContext(productoReducerContext)

    const {elemntoFocus} = useDetectarElementoEnFocos()

    const handleTeclas = (e) => {

        if (elemntoFocus == "INPUT") return

        if (e.key === "Backspace") {
            eliminarProducto(seleccion)

        }

    }


    useEffect(() => {
        document.addEventListener("keydown", handleTeclas)
        return () => {
            document.removeEventListener("keydown", handleTeclas)
        }


    }, [seleccion, elemntoFocus])


}
