import BuscadorInput from "@/components//BuscadorInput";
import { useForm } from "@/hooks//useForm";
import { useValidatedForm } from "@/hooks//useValidatedForm";
import { forwardRef, memo, useImperativeHandle, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import shortid from "shortid";

const ModalBody = forwardRef(({ changeForm, form, formRef }, ref) => {

    const formularioRef = useRef(null);

    const { onValidated, validado } = useValidatedForm()

    const { cantidad, fabricacion, vencimiento } = form

    const cantidadVerificacion = parseFloat(cantidad) >= 1
    const fabricacionVerificacion = fabricacion.length !== 0
    const vencimientoVerificacion = vencimiento.length !== 0

    useImperativeHandle(ref, () => ({
        verificacion: cantidadVerificacion && fabricacionVerificacion && vencimientoVerificacion,
        sendForm: () => formularioRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
    }))

    return (
        <Modal.Body>
            <p className="ls-4 text-ligthdark text-break text-center border border-3 border-li rounded-3 p-1 overflow-hidden fw-semibold">Factura con dulce de Chele</p>
            <Form
                noValidate
                ref={formularioRef}
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
})




const ModalDeAgregarProducto = memo(({ mostrar, alternarMostrar, agregarProducto }) => {

    const { form, changeForm } = useForm({ cantidad: 0, vencimiento: "", fabricacion: "" })

    const { cantidad, vencimiento, fabricacion } = form

    const imperativeRef = useRef(null)

    const enviarFormulario = () => {

        imperativeRef.current.sendForm()

        if (imperativeRef.current.verificacion) {
            agregarProducto(
                {
                    id: shortid(),
                    nombre: "test",
                    cantidad,
                    vencimiento: new Date(vencimiento + 'T00:00:00').getTime(),
                    fabricacion: new Date(fabricacion + 'T00:00:00').getTime()
                }
            )
        }

    }

    return (
        <Modal
            show={mostrar}
            onHide={alternarMostrar}>

            <Modal.Header className="d-flex justify-content-between align-items-center" >
                <Modal.Title className="flex-fill" >
                    <BuscadorInput texto="producto" />
                </Modal.Title>
            </Modal.Header>

            <ModalBody
                ref={imperativeRef}
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
})

export default ModalDeAgregarProducto