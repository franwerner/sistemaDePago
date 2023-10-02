import { Col, Container, Row, } from "react-bootstrap";
import styles from "@/styles/ContenedorMetodosDePagosAgregados.module.css"
import React, { useCallback, useContext } from "react";
import { restoDelPagoContext } from "@/context/Contextos";
import { MetodosDePagosVacios } from "./MetodosDePagosVacios";
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales";
import { DropwDownDeAplicacionDePorcentaje } from "./DropwDownDeAplicacionDePorcentaje";


export const PagoAgregado = React.memo(({ metodo, eliminarResto, background, seleccionarElemento, aplicarPorcentaje }) => {

    const { nombre, resto, id, porcentaje } = metodo

    const onClickRemove = () => {
        eliminarResto(metodo)
    }

    const onClickSeleccion = (e) => {

        if (e.target.tagName == "I") return

        seleccionarElemento(metodo)

    }

    const onClick = useCallback((porcentaje) => {

        aplicarPorcentaje({
            porcentaje,
            id
        })

    }, [aplicarPorcentaje])


    return (
        <>
            <Row onClick={onClickSeleccion}
                className={` mt-1 border p-4 ${styles[background]} ${styles.metodoAgregado}`}>

                <Col className=" text-center  ">
                    <p className="my-1">
                        {nombre}
                    </p>
                </Col>

                <Col className=" d-flex w-100 my-1">

                    <p className={`w-100 p-0 my-0 overflow-hidden ${styles.pagoResto}`}>
                        {separarNumerosConDecimales(resto)}
                    </p>

                    <DropwDownDeAplicacionDePorcentaje
                        functionEjecutable={onClick}
                        porcentaje={porcentaje}
                    >
                    </DropwDownDeAplicacionDePorcentaje>

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

