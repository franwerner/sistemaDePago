import { obtenerFecha } from "@/common//helper/obtenerFecha";
import { memo, useEffect } from "react";
import { Form } from "react-bootstrap";

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
                    style={{ maxWidth: "190px" }}
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