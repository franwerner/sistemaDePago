import { Button, Dropdown, FloatingLabel, Form } from "react-bootstrap"
import { useForm } from "@/hooks/useForm"
import React, { } from "react"

const DropwDownForm = ({ onSubmit, onClick, changeForm, evaluarPorcentaje }) => {

    return (
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
                        tabIndex={1}
                        autoComplete="off"
                        onChange={changeForm}
                        name="porcentajeForm"
                        type="number"
                        placeholder="0-100"
                        value={evaluarPorcentaje} />

                </FloatingLabel>
            </Form>

        </Dropdown.ItemText>
    )
}


export const DropwDownDeAplicacionDePorcentaje = React.memo(({ porcentaje, aplicarPorcentaje, }) => {

    const { changeForm, form, onSubmit } = useForm({ porcentajeForm: "" })

    const { porcentajeForm } = form

    const determinarSiPorcentajeEsNegativo = (numero) => Math.sign(porcentajeForm) == -1 ? -(Math.abs(numero)) : numero

    const evaluarPorcentaje = (porcentajeForm >= 100 || porcentajeForm <= -100 ? determinarSiPorcentajeEsNegativo(100) : porcentajeForm)

    const onClick = () => {

        if (isNaN(evaluarPorcentaje) || evaluarPorcentaje > 100 || evaluarPorcentaje.length == 0) return

        const redondearNumero = Math.round(evaluarPorcentaje * 100) / 100

        aplicarPorcentaje(redondearNumero)
    }


    return (

        <Dropdown
            drop="down-centered"
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

                <DropwDownForm
                    onClick={onClick}
                    onSubmit={onSubmit}
                    changeForm={changeForm}
                    evaluarPorcentaje={evaluarPorcentaje} />

                <Dropdown.Divider />

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
                        variant="outline-light">
                        Aplicar
                    </Button>
                </Dropdown.ItemText>
            </Dropdown.Menu>
        </Dropdown>

    )
})
