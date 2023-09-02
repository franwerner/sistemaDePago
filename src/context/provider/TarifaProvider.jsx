import { useState } from "react";
import { TarifaContex } from "../Contextos";

const listadoDeTarifas = [

    {
        "id": 1,
        "tipoDePago": "Local",
        "porcentaje": 0,
        "metodosDePago": ["Efectivo"]
    },
    {
        "id": 2,
        "tipoDePago": "Tajeta",
        "porcentaje": 10,
        "metodosDePago": ["Tarjeta naranja", "Tarjeta de credito", "Tarjeta de debito"]
    },
    {
        "id": 3,
        "tipoDePago": "Mercado pago",
        "porcentaje": 20,
        "metodosDePago": ["QR", "Tarjeta", "Transferencia"]
    },

]


export const TarifaProvider = ({ children }) => {


    const [tarifaActual, setTarifaActual] = useState(listadoDeTarifas[0])

    const cambiarTarifa = (value = {}) => {
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