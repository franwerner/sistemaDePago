
import { useState } from "react"
import { buscadorProductosContext } from "../Contextos"




export const BuscadorPorductosProvider = ({ children }) => {

    const [productoARenderizar, setProductoARenderizar] = useState(false)

    const establecerPruductoARenderizar = (producto) => {
        console.log(producto)
        setProductoARenderizar(producto)
    }



    return (

        <buscadorProductosContext.Provider value={{ establecerPruductoARenderizar, productoARenderizar }}>
            {children}
        </buscadorProductosContext.Provider>

    )
}