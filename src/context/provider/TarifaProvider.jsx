import { useCallback, useState } from "react";
import { TarifaContex } from "../Contextos";

const listadoDeTarifas = [

    {
        "id": 1,
        "tipoDeTarifa": "Local",
        "porcentaje": 0,
        "metodosDePago": [
            {
                "id": 1,
                "tipo": "efectivo",
                "nombre": "Efectivo"
            },
            // {
            //     "id": 2,
            //     "tipo": "tarjeta",
            //     "nombre": "Tarjeta naranja",
            // },
        ]
    },
    {
        "id": 2,
        "tipoDeTarifa": "Tarjeta de debito",
        "porcentaje": 10,
        "metodosDePago": [
            {
                "id": 1,
                "tipo": "tarjeta",
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 2,
                "tipo": "tarjeta",
                "nombre": "Tarjeta clover",
            },

            {
                "id": 3,
                "tipo": "tarjeta",
                "nombre": "Tarjeta cabal ",
            },
            {
                "id": 11,
                "tipo": "tarjeta",
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 21,
                "tipo": "tarjeta",
                "nombre": "Tarjeta clover",
            },

            {
                "id": 31,
                "tipo": "tarjeta",
                "nombre": "Tarjeta cabal ",
            },
            {
                "id": 12,
                "tipo": "tarjeta",
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 22,
                "tipo": "tarjeta",
                "nombre": "Tarjeta clover",
            },

            {
                "id": 32,
                "tipo": "tarjeta",
                "nombre": "Tarjeta cabal ",
            },
            {
                "id": 13,
                "tipo": "tarjeta",
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 23,
                "tipo": "tarjeta",
                "nombre": "Tarjeta clover",
            },

            {
                "id": 33,
                "tipo": "tarjeta",
                "nombre": "Tarjeta cabal ",
            },
            {
                "id": 14,
                "tipo": "tarjeta",
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 24,
                "tipo": "tarjeta",
                "nombre": "Tarjeta clover",
            },

            {
                "id": 34,
                "tipo": "tarjeta",
                "nombre": "Tarjeta cabal ",
            },
        ]
    },
    {
        "id": 3,
        "tipoDeTarifa": "Mercado pago",
        "porcentaje": 20,
        "metodosDePago": [
            {
                "id": 1,
                "tipo": "qr",
                "nombre": "QR",
            },

            {
                "id": 2,
                "tipo": "tarjeta",
                "nombre": "Tarjeta",
            },

            {
                "id": 3,
                "tipo": "transferencia",
                "nombre": "Transferencia",
            },
        ]
    },
    {
        "id": 4,
        "tipoDeTarifa": "Empleado",
        "porcentaje": -10,
        "metodosDePago": [
            {
                "id": 1,
                "tipo": "efectivo",
                "nombre": "Efectivo"
            }
        ]
    }

]

export const TarifaProvider = ({ children }) => {


    const [tarifaActual, setTarifaActual] = useState(listadoDeTarifas[0])

    const cambiarTarifa = useCallback((value = {}) => {
        setTarifaActual(value)
    }, [])

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