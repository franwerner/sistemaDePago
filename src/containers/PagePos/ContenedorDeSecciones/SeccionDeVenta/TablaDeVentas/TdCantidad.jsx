import { useForm } from "@/hooks//useForm"
import React, { useCallback, useEffect } from "react"
import BotonRestar from "@/components/BotonRestar"
import BotonSumar from "@/components/BotonSumar"
import { Form } from "react-bootstrap"

const TdCantidad = React.memo(({ cantidad, nombre, modificarCantidad }) => {

    const { changeForm, form } = useForm({ cantidad })

    const modificacionForm = useCallback((numero) => {
        const resultado = cantidad + (numero)

        changeForm({ target: { name: "cantidad", value: resultado } })
    }, [cantidad])

    useEffect(() => {

        const verificacion = form.cantidad.length == 0 || isNaN(form.cantidad) ? 0 : parseFloat(form.cantidad)

        modificarCantidad({ nombre, cantidad: verificacion })

    }, [form.cantidad])


    return (
        <>

            <BotonRestar restarCantidad={modificacionForm} />

            <Form.Control
                onChange={changeForm}
                name="cantidad"
                aria-describedby="cantidadTable"
                type="number"
                value={form.cantidad}
                className="mx-1 px-1 text-center"
            />

            <BotonSumar sumarCantidad={modificacionForm} />
        </>

    )
})

export default TdCantidad