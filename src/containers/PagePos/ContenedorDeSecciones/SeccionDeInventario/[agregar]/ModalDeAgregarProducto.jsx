import BuscadorInput from "@/components//BuscadorInput";
import { useForm } from "@/hooks//useForm";
import { useValidatedForm } from "@/hooks//useValidatedForm";
import {  useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalBody = ({ changeForm, form, formRef }) => {

    const { onValidated, validado } = useValidatedForm()

    const { cantidad, fabricacion, vencimiento } = form

    const cantidadVerificacion = parseFloat(cantidad) >= 1
    const fabricacionVerificacion = fabricacion.length !== 0
    const vencimientoVerificacion = vencimiento.length !== 0

    return (
        <Modal.Body>
            <p className="ls-4 text-ligthdark text-break text-center border border-3 border-li rounded-3 p-1 overflow-hidden fw-semibold">{form.producto}</p>
            <Form noValidate
                ref={formRef}
                onSubmit={onValidated}
            >
                <Form.Group>
                    <Form.Label className="text-ligthdark fw-medium ls-4">Fabricacion</Form.Label>
                    <Form.Control
                        required
                        isInvalid={!fabricacionVerificacion && validado}
                        isValid={fabricacionVerificacion && validado}
                        onChange={changeForm}
                        name="fabricacion"
                        aria-label="Fabricacion"
                        type="date"
                    />
                </Form.Group>
                <Form.Group className="my-1">
                    <Form.Label className="text-ligthdark fw-medium ls-4">Vencimiento</Form.Label>
                    <Form.Control
                        required
                        isInvalid={!vencimientoVerificacion && validado}
                        isValid={vencimientoVerificacion && validado}
                        onChange={changeForm}
                        name="vencimiento"
                        aria-label="Vencimiento"
                        type="date"
                    />
                </Form.Group>
                <Form.Group className="my-1">
                    <Form.Label className="text-ligthdark fw-medium ls-4">Cantidad</Form.Label>
                    <Form.Control
                        required
                        isInvalid={!cantidadVerificacion && validado}
                        isValid={cantidadVerificacion && validado}
                        value={form.cantidad == 0 ? "" : Math.abs(form.cantidad)}
                        onChange={changeForm}
                        name="cantidad"
                        step="0.1"
                        aria-label="cantidad"
                        type="number"
                    />
                </Form.Group>
            </Form>

        </Modal.Body>
    )
}




const ModalDeAgregarProducto = ({ mostrar, alternarMostrar }) => {

    const { form, changeForm } = useForm({ producto: "Factura Con Dulce De Leche", cantidad: 0, vencimiento: "", fabricacion: "" })

    const formularioRef = useRef(null);

    const enviarFormulario = (e) => {
        formularioRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
    }

    return (
        <Modal
            show={true}
            onHide={alternarMostrar}>

            <Modal.Header className="d-flex justify-content-between align-items-center" >
                <Modal.Title className="flex-fill" >
                    <BuscadorInput texto="producto" /> {/*Cuando el buscado encuentro algun producto lo agregar a producto del form*/}
                </Modal.Title>
            </Modal.Header>

            <ModalBody
                formRef={formularioRef}
                changeForm={changeForm}
                form={form}
            />
            <Modal.Footer className="d-flex justify-content-between">
                <Button
                    className="fw-semibold flex-fill ls-4 text-uppercase"
                    variant="outline-ligthdark"
                    onClick={alternarMostrar}>
                    Cerrar
                </Button>
                <Button
                    onClick={enviarFormulario}
                    type="button"
                    className="fw-semibold flex-fill  ls-4 text-uppercase"
                    variant="outline-primary-2">
                    Agregar al listado
                </Button>

            </Modal.Footer>
        </Modal>
    );
};

export default ModalDeAgregarProducto