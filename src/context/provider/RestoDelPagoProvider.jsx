import { useCallback, useEffect, useState } from "react";
import { restoDelPagoContext } from "../Contextos"
import { useListadoFinalProducto } from "../../hooks/useListadoFinalProducto";



export const RestoDelPagoProvider = ({ children }) => {

    const { listadoFinal } = useListadoFinalProducto()

    const [restante, setRestante] = useState({ "total": "", "restante": -1 });


    const establecerRestante = useCallback((valor) => {
        setRestante(prevRestante => ({ ...prevRestante, restante: prevRestante.total - valor }));
    }, []);


    useEffect(() => {

        if (restante.restante == 0) return setRestante({ ...restante, "restante": -1 })
        else setRestante({ "total": listadoFinal, "restante": -1 })


    }, [listadoFinal])



    return (
        <>
            <restoDelPagoContext.Provider value={{ restante, establecerRestante }}>
                {children}
            </restoDelPagoContext.Provider>

        </>
    );
};