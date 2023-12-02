import { useForm } from "@/hooks//useForm"
import React, { memo, useCallback, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import styles from "@/styles/SeccionDeVenta.module.css"
import { useFocusMouseElements } from "@/hooks//useFocusMouseElements"

const BotonCantidad = memo(({ tipo, onClick }) => {

    const iconType = tipo == "resta" ? "minus" : "plus"

    const numero = tipo == "resta" ? -1 : +1

    return (
        <Button
            onClick={() => onClick(numero)}
            variant="none"
            className=" p-0 border-0 bg-primary zoom d-flex align-items-center">
            <i className={`fa-${iconType} fa-solid rounded-2 text-white p-1 `}></i>
        </Button>
    )
})

const TdCantidad = memo(({ cantidad, nombre, modificarCantidad }) => {

    const { changeForm, form, setForm } = useForm({ cantidad })

    const { refFocusElement, onMouseEnter, onMouseLeave } = useFocusMouseElements()

    const modificacionForm = useCallback((numero) => setForm(({ cantidad }) => {
        const verificar = isNaN(cantidad) ? 0 : cantidad
        return { cantidad: parseFloat(verificar) + numero }
    }), [])

    useEffect(() => {

        if (cantidad == form.cantidad) return

        const verificacion = form.cantidad.length == 0 || isNaN(form.cantidad) ? "" : parseFloat(form.cantidad)

        modificarCantidad({ nombre, cantidad: verificacion })

    }, [form.cantidad])

    return (
        <td className={`${styles.tdCantidad} `}>

            <div className="d-flex align-items-center justify-content-center">

                <BotonCantidad
                    tipo={"resta"}
                    onClick={modificacionForm} />

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
                <BotonCantidad
                    tipo={"sumar"}
                    onClick={modificacionForm} />


            </div>

        </td>

    )
})

export default TdCantidad