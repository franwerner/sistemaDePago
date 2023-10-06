import React, { useEffect, useState } from "react"
import { CustomError } from "../ContructoresJS/customError"
import { CustomToastNotificaciones } from "../components/CustomToastNotificacion"
import { buscarCodigosDeErrores } from "../helper/codigoDeErrores"
import { useEventoMostrar } from "../hooks/useEventoMostrar"


export const GeneracionDeAlertas = ({ codigo, code }) => {
    console.log(codigo)
    const { mostrar, alternarMostrar } = useEventoMostrar();

    const [alerta, setAlerta] = useState({});

    const onClick = () => {
        code()
        alternarMostrar()
    }

    useEffect(() => {
        if (codigo > 0) {
            const buscarErrores = async () => {
                try {
                    await buscarCodigosDeErrores({ codigo: codigo });
                } catch (error) {
                    if (error instanceof CustomError) {
                        alternarMostrar();
                        setAlerta(error);
                    }
                }
            };

            buscarErrores()
        }
    }, [codigo, code, alternarMostrar]);


    return (
        <>
            <CustomToastNotificaciones
                alternarMostrar={onClick}
                mostrar={mostrar}
                alerta={alerta}
            />
        </>
    );
};
