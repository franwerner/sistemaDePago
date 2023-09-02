import { useState } from "react";
import { TarifaContex } from "../Contextos";

const listadoDeTarifas = [

    {
        "id": 1,
        "tipoDePago": "Local",
        "porcentaje": 0,
        "metodosDePago": [
            {
                "id": 1,
                "nombre": "Efectivo"
            }
        ]
    },
    {
        "id": 2,
        "tipoDePago": "Tarjeta de debito",
        "porcentaje": 10,
        "metodosDePago": [
            {
                "id": 1,
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 2,
                "nombre": "Tarjeta clover",
            },

            {
                "id": 3,
                "nombre": "Tarjeta cabal ",
            },
        ]
    },
    {
        "id": 3,
        "tipoDePago": "Mercado pago",
        "porcentaje": 20,
        "metodosDePago": [
            {
                "id": 1,
                "nombre": "QR",
            },

            {
                "id": 2,
                "nombre": "Tarjeta",
            },

            {
                "id": 3,
                "nombre": "Transferencia",
            },
        ]
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