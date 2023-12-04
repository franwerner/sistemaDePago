import { useForm } from "@/hooks//useForm"
import React, { memo, useCallback, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import styles from "@/styles/SeccionDeVenta.module.css"
import { useFocusMouseElements } from "@/hooks//useFocusMouseElements"

import { verificarSiEsNegativo } from "@/common//helper/verificarSiEsNegativo"
import { obtenerDecimales } from "@/common//helper/obtenerDecimales"
import { concatenarDecimales } from "@/common//helper/concatenarDecimales"

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


const TdCantidad = memo(({ cantidad = 0, nombre, modificarCantidad }) => {

    const { changeForm, form, setForm } = useForm({ cantidad })

    const { refFocusElement, onMouseEnter, onMouseLeave } = useFocusMouseElements()

    const modificacionForm = useCallback((numero) => setForm(({ cantidad }) => {

        return { cantidad: concatenarDecimales(cantidad, numero) }

    }), [])

    useEffect(() => {

        modificarCantidad({ nombre, cantidad: form.cantidad })

    }, [form.cantidad])


    return (
        <td className={`${styles.tdCantidad} `}>

            <div className="d-flex align-items-center justify-content-center">

                <BotonCantidad
                    tipo={"resta"}
                    onClick={modificacionForm} />
                <Form.Control
                    step="0.1"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    ref={refFocusElement}
                    onChange={changeForm}
                    name="cantidad"
                    aria-describedby="cantidadTable"
                    type="number"
                    value={cantidad == 0 ? "" : cantidad}
                    className="mx-1 px-0 text-center"
                />
                <BotonCantidad
                    tipo={"sumar"}
                    onClick={modificacionForm} />


            </div>

        </td>

    )
})

export default TdCantidad
