import { useSearchParams } from "react-router-dom";


export const useSearchQuery = () => {

    const [params, setParams] = useSearchParams()

    const parametros = Object.fromEntries(params)

    const agregarParametros = ({ target }) => {

        const nombre = target.dataset.name
        const orden = target.dataset.orden

        if (parametros[nombre]) return

        setParams({ ...parametros, [nombre]: orden })
    }

    const removerParametro = ({ target }) => {

        const arrayParams = Array.from(params)

        const name = target.dataset.name

        const filtrado = arrayParams.filter(([key, _]) => key !== name)

        setParams(Object.fromEntries(filtrado))

    }

    return {
        parametros,
        agregarParametros,
        removerParametro
    }

};