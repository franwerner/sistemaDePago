import { productoReducerContext } from "../Contextos";
import { productoReducer } from "../../hooks/useProductoReducer";

export const ProductoReducerProvider = ({ children }) => {
    

    return (
        <productoReducerContext.Provider value={{ ...productoReducer() }}>
            {children}
        </productoReducerContext.Provider>
    )
}

