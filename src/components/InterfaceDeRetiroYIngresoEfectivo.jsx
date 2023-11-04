import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import React from "react";


const FormImporte = React.memo(({ importe, changeForm }) => {

    return (
        <FloatingLabel
            controlId="floatingInput"
            label="Importe"
        >
            <Form.Control
                value={importe}
                onChange={changeForm}
                name="importe"
                type="number"
                placeholder="" />
        </FloatingLabel>
    )
})

const FormNota = React.memo(({ nota, changeForm }) => {


    return (
        <FloatingLabel
            controlId="floatingInput"
            label="Nota"
        >
            <Form.Control
                value={nota}
                onChange={changeForm}
                name="nota"
                type="text"
                placeholder="" />
        </FloatingLabel>
    )
})


const Formulario = () => {

    const { changeForm, form } = useForm({ importe: "", nota: "" })

    return (

        <Form id="form-efectivo">
            <FormImporte changeForm={changeForm} importe={form.importe} />
            <FormNota changeForm={changeForm} nota={form.nota} />
        </Form>
    )
}

const InterfaceDeRetiroYIngresoEfectivo = ({ tipo, alternarMostrar, mostrar }) => {

    return (
        <Modal
            show={mostrar}
            onHide={alternarMostrar}>
            <Modal.Header closeButton>
                <Modal.Title className="text-uppercase">{tipo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formulario />
            </Modal.Body>
            <Modal.Footer>

                <Button
                    form="form-efectivo"
                    type="submit"
                    variant="primary"
                    className="w-100"
                    onClick={alternarMostrar}>
                    Save Changes
                </Button>

            </Modal.Footer>
        </Modal>
    );
};


export default InterfaceDeRetiroYIngresoEfectivo