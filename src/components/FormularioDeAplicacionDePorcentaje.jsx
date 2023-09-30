import React from "react"
import { Button, FloatingLabel, Modal } from "react-bootstrap"
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import { useForm } from "@/hooks/useForm"
import { Form } from "react-bootstrap"


export const FormularioDeAplicacionDePorcentaje = React.memo(({ alternarMostrar, mostrar, numero, functionInicial }) => {

    const { changeForm, form, onSubmit } = useForm({ porcentaje: "" })

    const { porcentaje } = form

    const determinarSiPorcentajeEsNegativo = (numero) => Math.sign(porcentaje) == -1 ? -(Math.abs(numero)) : numero

    const evaluarPorcentaje = (porcentaje >= 100 || porcentaje <= -100 ? determinarSiPorcentajeEsNegativo(100) : porcentaje)

    const calcularPorcentaje = () => (evaluarPorcentaje / 100) * numero

    const verificarSiPorcentaje = isNaN(porcentaje) || porcentaje.length == 0 ? 0 : calcularPorcentaje()

    const onClick = () => {
        functionInicial(parseFloat(porcentaje))
    }

    return (
        <>
            <Modal show={mostrar} onHide={alternarMostrar}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bolder" style={{ color: "#555" }}>Aplica un porcentaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="fs-5 mb-4  mt-0 fw-light">
                        Porcentaje : {separarNumerosConDecimales(verificarSiPorcentaje)}
                    </div>


                    <Form onSubmit={onSubmit}>
                        <FloatingLabel controlId="porcentajeControl" label="Porcentaje">
                            <Form.Control
                                onChange={changeForm}
                                name="porcentaje"
                                type="numero"
                                placeholder="0-100"
                                value={evaluarPorcentaje} />
                        </FloatingLabel>
                    </Form>
                </Modal.Body>

                <Modal.Footer className="d-flex p-1 justify-content-between">

                    <div className="mx-2" style={{ color: "#555" }} >
                        Total : {separarNumerosConDecimales(verificarSiPorcentaje + numero)}
                    </div>

                    <Button
                        onClick={onClick}
                        className="mx-2"
                        variant="outline-dark">
                        Aplicar
                    </Button>
                </Modal.Footer>

            </Modal >
        </>
    )
})
