import { Button, Col, Container, Dropdown, FloatingLabel, Row, Form } from "react-bootstrap";
import styles from "@/styles/ContenedorMetodosDePagosAgregados.module.css"
import React, { useContext } from "react";
import { restoDelPagoContext } from "@/context/Contextos";
import { MetodosDePagosVacios } from "./MetodosDePagosVacios";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";
import { useEventoMostrar } from "@/hooks/useEventoMostrar";
import { FormularioDeAplicacionDePorcentaje } from "./FormularioDeAplicacionDePorcentaje";
import { useForm } from "../hooks/useForm";



const DropwDown = ({ numero, children, functionInicial }) => {

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
            <Dropdown

                drop="down-centered"
                align={"end"}
                autoClose={"outside"}
                className=" w-100"

            >
                <Button variant="none">{children}</Button>

                <Dropdown.Toggle
                    className="position-absolute"
                    split
                    variant="none" />

                <Dropdown.Menu >
                    <Dropdown.Item>

                        <Form onSubmit={onSubmit}>
                            <FloatingLabel
                                controlId="porcentajeControl"
                                label="Porcentaje">
                                <Form.Control
                                    autoFocus
                                    onChange={changeForm}
                                    name="porcentaje"
                                    type="numero"
                                    placeholder="0-100"
                                    value={evaluarPorcentaje} />

                            </FloatingLabel>
                        </Form>

                    </Dropdown.Item>
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item className="text-center">
                        <Button
                            onClick={onClick}
                            variant="outline-dark">
                            Aplicar
                        </Button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </>
    )
}

export const PagoAgregado = React.memo(({ metodo, eliminarResto, background, seleccionarElemento, aplicarPorcentaje }) => {

    const { nombre, resto, id } = metodo

    const { alternarMostrar, mostrar } = useEventoMostrar()

    const onClickRemove = () => {
        eliminarResto(metodo)
    }

    const onClickSeleccion = (e) => {

        if (e.target.tagName == "I") return

        seleccionarElemento(metodo)

    }

    const onClick = (porcentaje) => {

        aplicarPorcentaje({
            porcentaje,
            id
        })

    }


    return (
        <>


            <Row onClick={onClickSeleccion}
                className={` mt-1 border p-4 ${styles[background]} ${styles.metodoAgregado}`}>

                <Col className=" text-center  ">
                    <p className="my-1">
                        {nombre}
                    </p>
                </Col>

                <Col className="fw-bolder w-100 my-0">

                    <DropwDown
                        numero={resto}
                        functionInicial={onClick}
                    >
                        {separarNumerosConDecimales(resto)}
                    </DropwDown>

                </Col>
                <Col className="text-center">

                    <i onClick={onClickRemove}
                        className={`${styles.circleXMark} fa-solid my-1 fs-4 fa-circle-xmark`}>
                    </i>
                </Col>
            </Row>



        </>
    )
})

const ListaDePagosAgregados = React.memo(({ eliminarResto, ultimoSeleccionado, metodosDePago, seleccionarElemento, aplicarPorcentaje }) => {

    return (
        <>
            {metodosDePago.map(metodo => {
                const background = ultimoSeleccionado.id == metodo.id ? "metodoAgregadoSeleccionado" : ""

                return (
                    <PagoAgregado
                        key={metodo.id}
                        aplicarPorcentaje={aplicarPorcentaje}
                        eliminarResto={eliminarResto}
                        background={background}
                        seleccionarElemento={seleccionarElemento}
                        metodo={metodo}
                    />
                )
            }

            )}

        </>
    )
})


export const ContenedorMetodosDePagosAgregados = () => {

    const { eliminarResto, pagoActual, seleccionarElemento, aplicarPorcentaje } = useContext(restoDelPagoContext)

    const { metodosDePago, ultimoSeleccionado } = pagoActual

    return (
        <Container
            fluid>
            {
                metodosDePago.length == 0 ?
                    <MetodosDePagosVacios />
                    :
                    <ListaDePagosAgregados
                        eliminarResto={eliminarResto}
                        metodosDePago={metodosDePago}
                        ultimoSeleccionado={ultimoSeleccionado}
                        seleccionarElemento={seleccionarElemento}
                        aplicarPorcentaje={aplicarPorcentaje}
                    />
            }


        </Container>

    )
}

