import { useCallback, useState } from "react";

export const useFiltrado = () => {

    const [filtros, setFiltros] = useState()

    const establecerFiltros = useCallback(() => {

    }, [])

    return {
        filtros,
        establecerFiltros
    }

};