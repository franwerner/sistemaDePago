import { useForm } from "@/hooks//useForm"
import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from "react"
import { formResto } from "@/styles/MetodosDePagoCard.module.css"
import { Form } from "react-bootstrap"

export const RestoForm = memo(forwardRef(({ modificarResto, resto = 0, obj }, ref) => {

    const { form, changeForm} = useForm({ resto })

    const inputRef = useRef(null)

    useImperativeHandle(ref, () => ({
        focusInput: () => inputRef.current.focus(),
        blurInput: () => inputRef.current.blur()
    }))

    useEffect(() => {
    
        if (form.resto > 0 || form.resto < 0 || resto < 0 || resto > 0) {

            const valiarResto = form.resto.length == 0 || isNaN(form.resto) ? 0 : parseFloat(form.resto)

            modificarResto({ resto: valiarResto, ...obj })
        }

    }, [form.resto])

    return (
        <Form.Control

            aria-label="resto del total"
            ref={inputRef}
            tabIndex={0}
            onChange={changeForm}
            value={resto == 0 ? "" : resto}
            name="resto"
            className={`${formResto} w-50  text-center px-3 `}
            type="number"
            placeholder="" />
    )
}))

