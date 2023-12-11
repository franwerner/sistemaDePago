import { useCallback, useState } from "react";

export const useFiltrado = () => {

    const [filtros, setFiltros] = useState({})

    const establecerFiltros = useCallback((filtro) => {
        setFiltros(filtro)
    }, [])

    return {
        filtros,
        establecerFiltros
    }

};