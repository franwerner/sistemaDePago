import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import React from "react";
import styles from "@/styles/InterfaceDeRetiroYIngresoEfectivo.module.css"
import { verificarSiEsNegativo } from "../../common/helper/verificarSiEsNegativo";
import { useFocusMouseElements } from "../../hooks/useFocusMouseElements";

const FormImporte = React.memo(({ importe, changeForm }) => {

    const { onMouseEnter, onMouseLeave, refFocusElement } = useFocusMouseElements()

    return (
        <FloatingLabel
            controlId="floatingInput"
            label="Importe"
        >
            <Form.Control
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={refFocusElement}
                autoComplete="off"
                value={importe}
                onChange={changeForm}
                name="importe"
                type="number"
                placeholder="" />
        </FloatingLabel>
    )
})

const FormNota = React.memo(({ motivo, changeForm }) => {

    const { onMouseEnter, onMouseLeave, refFocusElement } = useFocusMouseElements()

    return (

        <FloatingLabel
            controlId="floatingInput"
            label="Motivo"
            className="my-3"
        >
            <Form.Control
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={refFocusElement}
                autoComplete="off"
                value={motivo}
                onChange={changeForm}
                name="motivo"
                type="text"
                placeholder="" />
        </FloatingLabel>
    )
})


const Formulario = ({ signo }) => {

    const { changeForm, form, onSubmit } = useForm({ importe: "", motivo: "" })

    const transformarImporte = () => {

        const verificacion = verificarSiEsNegativo(form.importe) ? form.importe : -(form.importe)

        const transformacion = signo == "negativo" ? verificacion : Math.abs(form.importe)

        return transformacion == 0 || isNaN(transformacion) ? "" : transformacion
    }

    return (

        <Form
            onSubmit={onSubmit}
            id="form-efectivo">


            <FormNota
                changeForm={changeForm}
                nota={form.motivo} />

            <FormImporte
                changeForm={changeForm}
                importe={transformarImporte()} />


        </Form>
    )
}

const InterfaceDeRetiroYIngresoEfectivo = ({ tipo, alternarMostrar, mostrar }) => {

    const signo = tipo == "retirar" ? "negativo" : "positivo"

    return (
        <Modal
            show={mostrar}
            onHide={alternarMostrar}>
            <Modal.Header closeButton>

                <Modal.Title className=" text-muted fs-5">
                    Indica el monto a {tipo.toLowerCase()}
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Formulario signo={signo} />
            </Modal.Body>
            <Modal.Footer>

                <Button
                    form="form-efectivo"
                    type="submit"
                    variant="primary"
                    className={`${styles.btnForm} shadow bg-hoverdark text-uppercase border-0 fw-semibold w-100`}
                    onClick={alternarMostrar}
                >
                    {tipo} efectivo
                </Button>

            </Modal.Footer>
        </Modal>
    );
};


export default InterfaceDeRetiroYIngresoEfectivo