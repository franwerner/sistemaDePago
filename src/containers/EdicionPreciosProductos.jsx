
import { useForm } from "@/hooks/useForm"
import { useComprobarNumeros } from "@/hooks/useComprobarNumeros.js"
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap"
import React, { useContext, useState } from "react"
import { productoReducerContext } from "@/context/Contextos"
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje"
import { TarifaContex } from "@/context/Contextos"
import { establecerLargoMaximo } from "@/helper/establecerLargoMaximo"
import { verificarSiEsNegativo } from "../helper/verificarSiEsNegativo"


const EdicionHeader = ({ validarNumero, total, nombre }) => {

    return (
        <>
            <div style={{ overflowWrap: "anywhere", minHeight: "150px" }}>
                <p style={{ color: "#555" }}>
                    {nombre}
                </p>

                <p className="fs-5 fw-light ">
                    {
                        validarNumero ? `Precio : ${separarNumerosConDecimales(total)}` : "No es un numero valido"
                    }
                </p>

            </div>

        </>
    )

}

export const EdicionPreciosProductos = React.memo(({ alternarMostrar, mostrar, seleccion }) => {

    const { tarifaActual } = useContext(TarifaContex)

    const { editarProducto } = useContext(productoReducerContext)

    const [alternarPrecio, setAltenarPrecio] = useState()

    const { precioModificado, nombre, cantidadSeleccionada } = seleccion

    const MAX_LONGITUD = 15

    const porcentaje = useCalculadoraPorcenje(precioModificado)

    const { form, onSubmit, establecerFormulario } = useForm({
        precioFormSinTarifa: precioModificado,
        precioFormConTarifa: (precioModificado + porcentaje)
    })

    const { precioFormSinTarifa, precioFormConTarifa } = form

    const onFocus = ({ target }) => {

        const resultado = target.name == "precioFormSinTarifa" ? false : true

        setAltenarPrecio(resultado)

    }


    const onChange = ({ target }) => {

        const updatedForm = { ...form };

        const targetValue = parseFloat(target.value)

        if (verificarSiEsNegativo(targetValue) == "Negativo") return

        const porcentaje = (tarifaActual.porcentaje / 100) * targetValue

        if (alternarPrecio) {

            updatedForm.precioFormSinTarifa = targetValue - porcentaje
            updatedForm.precioFormConTarifa = targetValue

        } else {

            updatedForm.precioFormConTarifa = targetValue + porcentaje
            updatedForm.precioFormSinTarifa = targetValue
        }

        establecerFormulario(updatedForm)
    }

    const data = {
        ...seleccion,
        "precioModificado": precioFormSinTarifa,
        "cantidadSeleccionada": verificarSiEsNegativo(precioFormSinTarifa) == "Negativo" ? -(cantidadSeleccionada) : cantidadSeleccionada
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
        <>


            <Modal
                onHide={alternarMostrar}
                show={mostrar} >
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
                                onFocus={onFocus}
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
                                onFocus={onFocus}
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
                        variant="outline-danger"
                        onClick={alternarMostrar}>
                        Cerrar
                    </Button>
                    <Button
                        variant="primary"
                        disabled={!validarNumero}
                        onClick={onClick}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    )
})


