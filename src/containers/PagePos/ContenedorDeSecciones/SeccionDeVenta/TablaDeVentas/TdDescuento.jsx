import { useForm } from "@/hooks//useForm"
import React, { useEffect } from "react"
import { Form } from "react-bootstrap"
import styles from "@/styles/SeccionDeVenta.module.css"
import { useFocusMouseElements } from "@/hooks//useFocusMouseElements"

const TdDescuento = React.memo(({ aplicarDescuento, descuento, nombre }) => {

    const { changeForm, form } = useForm({ descuento })

    const { refFocusElement, onMouseEnter, onMouseLeave } = useFocusMouseElements()

    const porcentajeForm = parseFloat(form.descuento)

    const determinarSiPorcentajeEsNegativo = (numero) => Math.sign(porcentajeForm) == -1 ? -(Math.abs(numero)) : numero

    const evaluarPorcentaje = (porcentajeForm >= 100 || porcentajeForm <= -100 ? determinarSiPorcentajeEsNegativo(100) : porcentajeForm)

    useEffect(() => {

        aplicarDescuento({ nombre, descuento: isNaN(evaluarPorcentaje) ? 0 : evaluarPorcentaje })

    }, [evaluarPorcentaje])

    return (
        <td className={`${styles.tdDescuento}`}>
            <div className="d-flex justify-content-center ">
                <Form.Control
                    ref={refFocusElement}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onChange={changeForm}
                    name="descuento"
                    value={descuento}
                    aria-describedby="descuentoTabla"
                    type="number"
                    className="text-center p-1"
                />
            </div>
        </td>
    )
})

export default TdDescuento