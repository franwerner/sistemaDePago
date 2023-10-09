import { useForm } from "@/hooks/useForm"
import { useComprobarNumeros } from "@/hooks/useComprobarNumeros.js"
import { Modal, Button, Form, FloatingLabel, Container, Col, Row } from "react-bootstrap"
import React, { useContext } from "react"
import { productoReducerContext } from "@/context/Contextos"
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje"
import { TarifaContex } from "@/context/Contextos"
import { establecerLargoMaximo } from "@/helper/establecerLargoMaximo"
import { verificarSiEsNegativo } from "../helper/verificarSiEsNegativo"


const EdicionHeader = ({ validarNumero, total, nombre }) => {

    return (

        <Container fluid style={{ minHeight: "150px" }}>
            <Row >
                <Col xs={"auto"} className="w-100">
                    <p className="text-break" style={{ color: "#555" }}>
                        {nombre}asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                    </p>
                </Col>

                <Col>
                    <p className="fs-5  text-break fw-light ">
                        {
                            validarNumero ? `Precio : $ ${separarNumerosConDecimales(total + 1231231231235454545454545454545454545454545)} ` : "No es un numero valido"
                        }
                    </p>

                </Col>
            </Row>
        </Container>
    )

}

export const EdicionPreciosProductos = React.memo(({ alternarMostrar, mostrar, seleccion }) => {

    const { tarifaActual } = useContext(TarifaContex)

    const { editarProducto } = useContext(productoReducerContext)

    const { precioModificado, nombre } = seleccion

    const MAX_LONGITUD = 15

    const porcentaje = useCalculadoraPorcenje(precioModificado)

    const { form, onSubmit, establecerFormulario } = useForm({
        precioFormSinTarifa: precioModificado,
        precioFormConTarifa: (precioModificado + porcentaje)
    })

    const { precioFormSinTarifa, precioFormConTarifa } = form


    const onChange = ({ target }) => {

        const updatedForm = { ...form };

        const targetValue = parseFloat(target.value)

        if (verificarSiEsNegativo(targetValue)) return

        if (target.name == "precioFormConTarifa") {
            updatedForm.precioFormConTarifa = targetValue;
            updatedForm.precioFormSinTarifa = parseFloat((targetValue / (1 + tarifaActual.porcentaje / 100)).toFixed(2));
        } else {
            updatedForm.precioFormSinTarifa = targetValue;
            updatedForm.precioFormConTarifa = parseFloat((targetValue * (1 + tarifaActual.porcentaje / 100)).toFixed(2));
        }

        establecerFormulario(updatedForm)
    }

    const data = {
        ...seleccion,
        "precioModificado": precioFormSinTarifa,
    }

    const onClick = () => {
        alternarMostrar(),
            editarProducto(data)
    }


    const { validarNumero } = useComprobarNumeros(form)

    const verificarSiValueEsUnNumero = (tipoDeValue) => {

        const value = isNaN(tipoDeValue) ? "" : establecerLargoMaximo({ numero: tipoDeValue, max: MAX_LONGITUD })

        const resultado = value == "" ? value : parseFloat(value.toFixed(2))

        return resultado

    }

    return (
        <Modal
            onHide={alternarMostrar}
            show={true} >
            <Modal.Header>
                <Modal.Title  >
                    <EdicionHeader
                        validarNumero={validarNumero}
                        total={precioFormConTarifa}
                        nombre={nombre} />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form
                    onSubmit={onSubmit}
                    className="d-flex justify-content-center">
                    <FloatingLabel
                        controlId="floatingPrecio"
                        className="w-100 me-1"
                        label="Precio sin tarifa">

                        <Form.Control
                            type="number"
                            onChange={onChange}
                            name="precioFormSinTarifa"
                            value={verificarSiValueEsUnNumero(precioFormSinTarifa)}
                            placeholder="Ingrese el precio"
                        >
                        </Form.Control>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPrecio"
                        className="w-100 me-1"
                        label="Precio con tarifa">

                        <Form.Control
                            type="number"
                            onChange={onChange}
                            name="precioFormConTarifa"
                            value={verificarSiValueEsUnNumero(precioFormConTarifa)}
                            placeholder="Ingrese el precio"
                        >
                        </Form.Control>
                    </FloatingLabel>

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button
                    className="w-100"
                    variant="outline-dark"
                    disabled={!validarNumero}
                    onClick={onClick}>
                    Guardar cambios
                </Button>
            </Modal.Footer>

        </Modal>
    )
})


