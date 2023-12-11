import { useForm } from "@/hooks//useForm"
import { useEffect } from "react"
import { Form } from "react-bootstrap"
import styles from "@/styles/SeccionDeVenta.module.css"
import { memo } from "react"

const TdDescuento = memo(({ aplicarDescuento, descuento = 0, obj }) => {

    const { changeForm, form } = useForm({ descuento })

    const porcentajeForm = parseFloat(form.descuento)

    useEffect(() => {

        if (descuento == form.descuento) return

        const verificarSiEsMayorA100 = porcentajeForm >= 100 ? 100 : porcentajeForm

        aplicarDescuento({ ...obj, descuento: verificarSiEsMayorA100 })

    }, [porcentajeForm])

    return (
        <td className={`${styles.tdDescuento}`}>
            <div className="d-flex justify-content-center ">
                <Form.Control
                    step="0.1"
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