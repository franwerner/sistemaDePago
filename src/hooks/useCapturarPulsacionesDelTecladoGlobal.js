import { useContext, useEffect } from "react"
import { productoReducerContext } from "../context/Contextos"
import { useDetectarElementoEnFocos } from "./useDetectarElementoEnFoco"


export const useCapturarPulsacionesDelTecladoGlobal = (seleccion = {}) => {

    //Solo se activa cuando se activa un producto en el carrito

    const { eliminarProducto } = useContext(productoReducerContext)

    const {elemntoFocus} = useDetectarElementoEnFocos()

    const handleTeclas = (e) => {

        if (elemntoFocus.tagName == "INPUT") return

        if (e.key === "Backspace" && elemntoFocus.children[0].id !== "modal-pagos") {
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
