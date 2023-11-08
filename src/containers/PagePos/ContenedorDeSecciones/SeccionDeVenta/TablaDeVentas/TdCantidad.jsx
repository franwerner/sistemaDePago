import { useForm } from "@/hooks//useForm"
import React, { useCallback, useEffect } from "react"
import BotonRestar from "@/components/BotonRestar"
import BotonSumar from "@/components/BotonSumar"
import { Form } from "react-bootstrap"
import styles from "@/styles/SeccionDeVenta.module.css"
import { useFocusMouseElements } from "@/hooks//useFocusMouseElements"

const TdCantidad = React.memo(({ cantidad, nombre, modificarCantidad }) => {

    const { changeForm, form } = useForm({ cantidad })

    const { refFocusElement, onMouseEnter, onMouseLeave } = useFocusMouseElements()

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
        <td className={`${styles.tdCantidad} `}>

            <div className="d-flex align-items-center justify-content-center">
                <BotonRestar restarCantidad={modificacionForm} />

                <Form.Control
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    ref={refFocusElement}
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