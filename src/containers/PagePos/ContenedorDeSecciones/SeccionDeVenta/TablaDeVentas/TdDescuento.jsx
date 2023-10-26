import { useForm } from "@/hooks//useForm"
import React, { useEffect } from "react"
import { Form } from "react-bootstrap"


const TdDescuento = React.memo(({ aplicarDescuento, descuento, nombre }) => {

    const { changeForm, form } = useForm({ descuento })

    const porcentajeForm = parseFloat(form.descuento)

    const determinarSiPorcentajeEsNegativo = (numero) => Math.sign(porcentajeForm) == -1 ? -(Math.abs(numero)) : numero

    const evaluarPorcentaje = (porcentajeForm >= 100 || porcentajeForm <= -100 ? determinarSiPorcentajeEsNegativo(100) : porcentajeForm)

    useEffect(() => {

        aplicarDescuento({ nombre, descuento: isNaN(evaluarPorcentaje) ? 0 : evaluarPorcentaje })

    }, [evaluarPorcentaje])

    return (
        <div className="d-flex justify-content-center">
            <Form.Control
                onChange={changeForm}
                name="descuento"
                value={evaluarPorcentaje}
                aria-describedby="descuentoTabla"
                type="number"
                className="text-center"
            />
        </div>

    )
})

export default TdDescuento