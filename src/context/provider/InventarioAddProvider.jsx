import { useInventarioReducer } from "@/hooks//useInventarioReducer";
import { InventarioAddContext } from "../Contextos";

export const InventarioAddProvider = ({ children }) => {

    return (
        <InventarioAddContext.Provider value={{ ...useInventarioReducer() }}>
            {children}
        </InventarioAddContext.Provider>
    );
};