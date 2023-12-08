import { obtenerFecha } from "@/common//helper/obtenerFecha";
import { memo, useEffect } from "react";
import { Form } from "react-bootstrap";
import { tFabricacion } from "@/styles/SeccionDeInventario.module.css"

export const TdFabricacion = memo(({ fabricacion, modificarFabricacion, id, fechaFab, changeForm }) => {

    const { dia, mes, año, hora, minutos } = obtenerFecha(fabricacion)


    useEffect(() => {
        if (fechaFab.length !== 0) {

            modificarFabricacion({ id, fabricacion: Date.parse(fechaFab) })
        }
    }, [fechaFab])

    return (
        <td className="text-center">
            <div className="d-flex justify-content-center">
                <Form.Control
                    id={tFabricacion}
                    name="fechaFab"
                    onChange={changeForm}
                    aria-label="fabricacion fecha"
                    defaultValue={`${año}-${mes}-${dia}T${hora}:${minutos}`}
                    type="datetime-local">
                </Form.Control>
            </div>
        </td>
    );

})