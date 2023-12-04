import { useForm } from "@/hooks//useForm"
import { useEffect } from "react"
import { Form } from "react-bootstrap"
import styles from "@/styles/SeccionDeVenta.module.css"
import { useFocusMouseElements } from "@/hooks//useFocusMouseElements"
import { memo } from "react"

const TdDescuento = memo(({ aplicarDescuento, descuento = 0, nombre }) => {

    const { changeForm, form } = useForm({ descuento })

    const { refFocusElement, onMouseEnter, onMouseLeave } = useFocusMouseElements()

    const porcentajeForm = parseFloat(form.descuento)

    useEffect(() => {

        const verificarSiEsMayorA100 = porcentajeForm >= 100 ? 100 : porcentajeForm

        aplicarDescuento({ nombre, descuento: verificarSiEsMayorA100 })

    }, [porcentajeForm])

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