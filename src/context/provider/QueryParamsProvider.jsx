import { useCallback, useState } from "react";
import { QueryParamsContext } from "../Contextos";

export const QueryParamsProvider = ({ children }) => { //Esto reemplaza al query de las URL, en el caso de los filtrados y ordenes, mas que nada para un enfoque mas controlado y que la URL no se llene de querys.

    const [queryParams, setQueryParams] = useState({
        "filtro": {},
        "orden": {}
    }); //Objectos anidados

    const establecerQueryParams = useCallback(({ tipo, nuevo }) => {
        setQueryParams((query) => ({ ...query, [tipo]: nuevo }))
    }, [])

    const borrarParametro = (nombre) => {
        const borrado = Object.entries(queryParams).filter(([key, _]) => key !== nombre.toLowerCase())
        setQueryParams(Object.fromEntries(borrado))
    }

    return (
        <QueryParamsContext.Provider value={{ queryParams, establecerQueryParams, borrarParametro }}>
            {children}
        </QueryParamsContext.Provider>
    )

};