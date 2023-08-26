import { useState } from "react";
import { TarifaContex } from "../Contextos";

const listadoDeTarifas = [
    {
        "tipoDePago": "Efectivo",
        "tarifa": 0
    },
    {
        "tipoDePago": "Tajeta",
        "tarifa": 15
    },
    {
        "tipoDePago": "Dolar",
        "tarifa": 30
    },

]


export const TarifaProvider = ({ children }) => {

    const [tarifa, setTarifa] = useState(listadoDeTarifas[0])

    const cambiarTarifa = (value) => {
      setTarifa(value)
    }

    return (
        <>
            <TarifaContex.Provider value={{
                cambiarTarifa,
                listadoDeTarifas,
                tarifa
            }}>
                {children}
            </TarifaContex.Provider>
        </>
    )
}