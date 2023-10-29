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
                "nombre": "Efectivo"
            }
        ]
    },
    {
        "id": 2,
        "tipoDeTarifa": "Tarjeta de debito",
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
            {
                "id": 11,
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 21,
                "nombre": "Tarjeta clover",
            },

            {
                "id": 31,
                "nombre": "Tarjeta cabal ",
            },
            {
                "id": 12,
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 22,
                "nombre": "Tarjeta clover",
            },

            {
                "id": 32,
                "nombre": "Tarjeta cabal ",
            },
            {
                "id": 13,
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 23,
                "nombre": "Tarjeta clover",
            },

            {
                "id": 33,
                "nombre": "Tarjeta cabal ",
            },
            {
                "id": 14,
                "nombre": "Tarjeta naranja",
            },
            {
                "id": 24,
                "nombre": "Tarjeta clover",
            },

            {
                "id": 34,
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
    {
        "id": 4,
        "tipoDeTarifa": "Empleado",
        "porcentaje": -10,
        "metodosDePago": [
            {
                "id": 1,
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