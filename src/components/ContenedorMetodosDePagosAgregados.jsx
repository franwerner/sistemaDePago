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
        <Row onClick={onClickSeleccion}
            className={` mt-1 border p-4 ${styles[background]} ${styles.metodoAgregado}`}>

            <Col className=" text-center  ">
                <p className="my-1">
                    {nombre}
                </p>
            </Col>

            <Col className=" d-flex  my-1">

                <p className=" p-0 my-0 text-truncate ">
                    {separarNumerosConDecimales(resto)}
                </p>

                <DropwDownDeAplicacionDePorcentaje
                    aplicarPorcentaje={onClick}
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
    )
})

const ListaDePagosAgregados = () => {

    const { eliminarResto, pagoActual, seleccionarElemento, aplicarPorcentaje } = useContext(restoDelPagoContext)

    const { metodosDePago, ultimoSeleccionado } = pagoActual

    const obtenerBackground = (metodo) => {
        return ultimoSeleccionado.id == metodo.id ? "metodoAgregadoSeleccionado" : ""
    }

    return metodosDePago.map(metodo =>

        <PagoAgregado
            key={metodo.id}
            aplicarPorcentaje={aplicarPorcentaje}
            eliminarResto={eliminarResto}
            background={obtenerBackground(metodo)}
            seleccionarElemento={seleccionarElemento}
            metodo={metodo}
        />

    )

}


export const ContenedorMetodosDePagosAgregados = () => {

    const { pagoActual } = useContext(restoDelPagoContext)

    return (
        <Container fluid>

            {pagoActual.metodosDePago.length == 0 ? <MetodosDePagosVacios /> : <ListaDePagosAgregados />}

        </Container>

    )
}

