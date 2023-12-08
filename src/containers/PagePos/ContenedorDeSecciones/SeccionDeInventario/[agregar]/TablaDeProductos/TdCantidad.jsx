import { memo, useEffect } from "react"
import { Form } from "react-bootstrap"
import {tCantidad} from "@/styles/SeccionDeInventario.module.css"

export const TdCantidad = memo(({ cantidad, modificarCantidad, id, cantidadForm, changeForm }) => {

    useEffect(() => {

        if (cantidadForm !== 0) {
            modificarCantidad({ id, cantidad: Math.abs(cantidadForm) })
        }

    }, [cantidadForm])

    return (
        <td>
            <div className="d-flex justify-content-center">
                <Form.Control
                    name="cantidad"
                    className="text-center"
                    id={tCantidad}
                    onChange={changeForm}
                    aria-label="cantidad"
                    value={cantidad}
                    step={"0.1"}
                    type="number">
                </Form.Control>
            </div>
        </td>
    )
})