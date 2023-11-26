import { useState } from "react";
import { QueryParamsContext } from "../Contextos";
//Sirve para pasarle al servidor/cliente informacion sobre que es lo que tiene que filtrar u ordenar
export const QueryParamsProvider = ({ children }) => {//Deespues añadir logica para filtros y organizar un un array de objectos u objectos anidas la estructura de orden y filtros.

    const [queryParams, setQueryParams] = useState({});

    const establecerQueryParams = ({ target }) => {
        const nombre = target.dataset.name.toLowerCase()

        const prioridad = target.dataset.prioridad

        const buscarParametro = queryParams[nombre] ? queryParams[nombre] : ""

        const orden = buscarParametro.match("<") ? ">" : "<"

        setQueryParams((query) => ({ ...query, [nombre]: orden + prioridad }))
    };

    const obtenerOrden = (nombre) => {

        const parametroActual = queryParams[nombre.toLowerCase()]

        const expReg = /[<>]/g

        const buscarParametro = parametroActual && parametroActual.match(expReg)[0]

        return buscarParametro
    }

    return (
        <QueryParamsContext.Provider value={{ queryParams, establecerQueryParams, obtenerOrden }}>
            {children}
        </QueryParamsContext.Provider>
    )

};