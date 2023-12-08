import { obtenerFecha } from "@/common//helper/obtenerFecha";
import { memo, useEffect } from "react";
import { Form } from "react-bootstrap";
import { tVencimiento } from "@/styles/SeccionDeInventario.module.css"

export const TdVencimiento = memo(({
    vencimiento,
    modificarVencimiento,
    id,
    fechaVec,
    changeForm }) => {

    const { dia, mes, año, hora, minutos } = obtenerFecha(vencimiento)

    useEffect(() => {
        if (fechaVec.length !== 0) {

            modificarVencimiento({ id, vencimiento: Date.parse(fechaVec) })
        }
    }, [fechaVec])

    return (
        <td>
            <div className="d-flex justify-content-center">
                <Form.Control
                    name="fechaVec"
                    onChange={changeForm}
                    id={tVencimiento}
                    aria-label="vencimiento fecha"
                    defaultValue={`${año}-${mes}-${dia}T${hora}:${minutos}`}
                    type="datetime-local">
                </Form.Control>
            </div>
        </td>
    );
})
