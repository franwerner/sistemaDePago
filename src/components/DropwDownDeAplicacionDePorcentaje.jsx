import { Button, Dropdown, FloatingLabel, Form } from "react-bootstrap"
import { useForm } from "@/hooks/useForm"
import React, { useEffect, useRef } from "react"

export const DropwDownDeAplicacionDePorcentaje = React.memo(({ porcentaje, functionEjecutable, }) => {

    const { changeForm, form, onSubmit } = useForm({ porcentajeForm: "" })

    const formRef = useRef(null)

    const { porcentajeForm } = form

    const determinarSiPorcentajeEsNegativo = (numero) => Math.sign(porcentajeForm) == -1 ? -(Math.abs(numero)) : numero

    const evaluarPorcentaje = (porcentajeForm >= 100 || porcentajeForm <= -100 ? determinarSiPorcentajeEsNegativo(100) : porcentajeForm)

    const onClick = () => {


        if (isNaN(evaluarPorcentaje) || evaluarPorcentaje > 100 || evaluarPorcentaje.length == 0) return

        const redondearNumero = Math.round(evaluarPorcentaje * 100) / 100

        functionEjecutable(redondearNumero)
    }

    useEffect(() => {

        if (!formRef.current) return

        formRef.current.focus()

    }, [formRef])


    return (
        <>
            <Dropdown
                drop="down-centered"
                align={"end"}
                autoClose={"outside"}
            >

                <Dropdown.Toggle
                    variant="none"
                    split
                    style={{ top: "-20%" }}
                    className="position-absolute"
                >
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" >
                    <Dropdown.ItemText
                        className="fw-normal">
                        <Form
                            id="porcentajeControl"
                            onSubmit={(e) => {
                                onSubmit(e)
                                onClick()
                            }}>
                            <FloatingLabel
                                controlId="porcentajeControl"
                                label="Porcentaje">
                                <Form.Control
                                    ref={formRef}
                                    autoComplete="off"
                                    autoCorrect="true"
                                    onChange={changeForm}
                                    name="porcentajeForm"
                                    type="numero"
                                    placeholder="0-100"
                                    value={evaluarPorcentaje} />

                            </FloatingLabel>
                        </Form>

                    </Dropdown.ItemText>
                    <Dropdown.Divider></Dropdown.Divider>

                    <Dropdown.ItemText
                        style={{ fontSize: "14px" }}
                        className="text-center fw-normal">
                        Porcentaje {porcentaje}%
                    </Dropdown.ItemText>

                    <Dropdown.ItemText className="text-center p-0">
                        <Button
                            type="submit"
                            form="porcentajeControl"
                            onClick={onClick}
                            variant="light">
                            Aplicar
                        </Button>
                    </Dropdown.ItemText>
                </Dropdown.Menu>
            </Dropdown>

        </>
    )
})
