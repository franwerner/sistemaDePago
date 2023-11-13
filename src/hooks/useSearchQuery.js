import { useSearchParams } from "react-router-dom";


export const useSearchQuery = () => {

    const [params, setParams] = useSearchParams()

    const parametros = Object.fromEntries(params)

    const arrayParams = Array.from(params)

    const agregarParametros = ({ target }) => {

        const nombre = target.dataset.name.toLowerCase()

        const prioridad = target.dataset.prioridad

        const buscarParametro = parametros[nombre] ? parametros[nombre] : ""

        const orden = buscarParametro.match("<") ? ">" : "<"

        setParams({ ...parametros, [nombre]: orden + prioridad })
    }

    const removerParametro = ({ target }) => {

        const name = target.dataset.name

        const filtrado = arrayParams.filter(([key, _]) => key !== name)

        setParams(Object.fromEntries(filtrado))

    }

    const obtenerOrden = (nombre) => {

        const parametroActual = parametros[nombre.toLowerCase()]

        const expReg = /[<>]/g

        const buscarParametro = parametroActual && parametroActual.match(expReg)[0]

        return buscarParametro
    }

    return {
        parametros,
        agregarParametros,
        removerParametro,
        obtenerOrden
    }

};