import { useSearchParams } from "react-router-dom";


export const useSearchQuery = () => {

    const [params, setParams] = useSearchParams()

    const parametros = Object.fromEntries(params)

    const agregarParametros = ({ target }) => {

        const nombre = target.dataset.name

        if (parametros[nombre]) return

        const largo = Object.values(parametros).length + 1

        setParams({ ...parametros, [nombre]: largo })
    }

    const removerParametro = ({ target }) => {

        const arrayParams = Array.from(params)

        const name = target.dataset.name

        const filtrado = arrayParams.filter(([key, _]) => key !== name)

        setParams(Object.fromEntries(filtrado))

    }

    return {
        params,
        agregarParametros,
        removerParametro
    }

};