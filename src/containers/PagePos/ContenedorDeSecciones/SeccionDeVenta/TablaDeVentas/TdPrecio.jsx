import { useForm } from "@/hooks//useForm"
import React, { useEffect } from "react"
import { Form } from "react-bootstrap"

const TdPrecio = React.memo(({ precioModificado, modificarPrecio, nombre }) => {

    const { changeForm, form } = useForm({ precio: precioModificado })

    useEffect(() => {

        const verificacion = form.precio.length == 0 || isNaN(form.precio) ? 0 : Math.abs(form.precio)

        modificarPrecio({ nombre, precioModificado: verificacion })

    }, [form.precio])

    return (
        <div className="d-flex justify-content-center">
            <Form.Control
                onChange={changeForm}
                aria-describedby="precioTable"
                type="number"
                name="precio"
                value={Math.abs(form.precio) == 0 ? "" : Math.abs(form.precio)}
                className="px-1 text-center"
            />
        </div>
    )
})

export default TdPrecio