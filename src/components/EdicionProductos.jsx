
import { useForm } from "../hooks/useForm"
import { useComprobarNumeros } from "../hooks/useComprobarNumeros.js"
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap"
import React, { useContext } from "react"
import { TarifaContex, productoReducerContext, productoSeleccionadoContext } from "../context/Contextos"
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales"
import { calculadoraPorcentaje } from "../helper/calcularPorcentaje"


export const EdicionProductos = React.memo(({alternarMostrar }) => {


    
    const { seleccion } = useContext(productoSeleccionadoContext)

    const { editarProducto } = useContext(productoReducerContext)

    const { tarifa } = useContext(TarifaContex)

    const { precioModificado, cantidadSeleccionada } = seleccion

    const { form, onSubmit, changeForm } = useForm({
        precioForm: precioModificado
        , cantidadForm: cantidadSeleccionada
    })


    const { precioForm, cantidadForm } = form

    const { validarNumero } = useComprobarNumeros(form)

    const data = {
        ...seleccion,
        "precioModificado": parseFloat(precioForm),
        "cantidadSeleccionada": parseFloat(cantidadForm)
    }

    const porcentaje = calculadoraPorcentaje(cantidadForm, tarifa.tarifa)

    const total = porcentaje + (precioForm * cantidadForm)

    return (
        <>


            <Modal onHide={alternarMostrar} show={true} >
                <Modal.Header>
                    <Modal.Title  >
                        <div style={{ overflowWrap: "anywhere", minHeight: "150px" }}>
                            <p style={{ color: "#555" }}>
                                {seleccion.nombre}
                            </p>

                            <p className="fs-5 fw-light ">
                                {
                                    validarNumero ? `Total  : ${separarNumerosConDecimales(total)}` : "No es un numero valido"
                                }
                            </p>
                        </div>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={onSubmit} className="d-flex justify-content-center">
                        <FloatingLabel controlId="floatingPrecio" className="w-100 me-1" label="Precio">

                            <Form.Control
                                type="text"
                                onChange={changeForm}
                                name="precioForm"
                                value={precioForm}
                                placeholder="Ingrese el precio"

                            >
                            </Form.Control>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingCantidad" className="w-100" label="Cantidad">
                            <Form.Control type="text"
                                placeholder="Ingrese la cantidad"
                                onChange={changeForm}
                                name="cantidadForm"
                                value={cantidadForm}
                            >
                            </Form.Control>
                        </FloatingLabel>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={alternarMostrar}>
                        Cerrar
                    </Button>
                    <Button variant="primary"
                        disabled={!validarNumero}
                        onClick={() => {
                            alternarMostrar(),
                                editarProducto(data)
                        }}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    )
})


