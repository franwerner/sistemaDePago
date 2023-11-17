import { useLocation } from "react-router-dom"

export const concatenacionDeRutas = (posicion) => {

    const { pathname } = useLocation()

    const arrayRutas = pathname.split("/").filter(item => item.length !== 0)


    let rutaNueva = ""

    for (let i = 0; i < arrayRutas.length; i++) {
        if (i > posicion) break
        rutaNueva += `/${arrayRutas[i]}`

    }

    return rutaNueva
}
