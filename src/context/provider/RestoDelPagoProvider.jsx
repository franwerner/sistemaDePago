
import { useMetodoDePagoReducer } from "@/hooks/useMetodoDePagoReducer";
import { restoDelPagoContext } from "../Contextos"





export const RestoDelPagoProvider = ({ children }) => {

    return (
        <restoDelPagoContext.Provider value={{ ...useMetodoDePagoReducer() }}>
            {children}
        </restoDelPagoContext.Provider>

    );
};