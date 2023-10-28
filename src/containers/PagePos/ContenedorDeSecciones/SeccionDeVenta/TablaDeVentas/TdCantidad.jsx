import { useForm } from "@/hooks//useForm"
import React, { useCallback, useEffect } from "react"
import BotonRestar from "@/components/BotonRestar"
import BotonSumar from "@/components/BotonSumar"
import { Form } from "react-bootstrap"
import styles from "@/styles/SeccionDeVenta.module.css"

const TdCantidad = React.memo(({ cantidad, nombre, modificarCantidad }) => {

    const { changeForm, form } = useForm({ cantidad })

    const modificacionForm = useCallback((numero) => {
        const resultado = cantidad + (numero)

        changeForm({ target: { name: "cantidad", value: resultado } })
    }, [cantidad])

    useEffect(() => {

        if (cantidad == form.cantidad) return

        const verificacion = form.cantidad.length == 0 || isNaN(form.cantidad) ? "" : parseFloat(form.cantidad)

        modificarCantidad({ nombre, cantidad: verificacion })

    }, [form.cantidad])

    return (
        <td className={`${styles.tdCantidad} d-flex justify-content-center`}>

            <div className="d-flex m-0 p-0">
                <BotonRestar restarCantidad={modificacionForm} />

                <Form.Control
                    onChange={changeForm}
                    name="cantidad"
                    aria-describedby="cantidadTable"
                    type="number"
                    value={cantidad}
                    className="mx-1 px-1 text-center"
                />

                <BotonSumar sumarCantidad={modificacionForm} />
            </div>
        </td>

    )
})

export default TdCantidad