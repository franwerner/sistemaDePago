import { useState } from "react";
import { TarifaContex } from "../Contextos";

const listadoDeTarifas = [
    {
        "tipoDePago": "Efectivo",
        "porcentaje": 0
    },
    {
        "tipoDePago": "Tajeta",
        "porcentaje": 15
    },
    {
        "tipoDePago": "Dolar",
        "porcentaje": 30
    },

]


export const TarifaProvider = ({ children }) => {

    const [tarifaActual, setTarifaActual] = useState(listadoDeTarifas[0])

    const cambiarTarifa = (value) => {
        setTarifaActual(value)
    }

    return (
        <>
            <TarifaContex.Provider value={{
                cambiarTarifa,
                listadoDeTarifas,
                tarifaActual
            }}>
                {children}
            </TarifaContex.Provider>
        </>
    )
}