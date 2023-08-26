
import { productoReducerContext } from "../context/Contextos"
import { useListadoFinalProducto } from "../hooks/useListadoFinalProducto"
import React, { useContext } from "react"
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales"
import styles from "../styles/TotalProductos.module.css"
import { Col, Row } from "react-bootstrap"

const Precio = React.memo(() => {

    const { listaProducto } = useContext(productoReducerContext)

    const { listadoFinal } = useListadoFinalProducto(listaProducto)

    return (
        <Col  className={` d-flex justify-content-end `}>
            <p className={`${styles.precio} fs-5 overflow-hidden`}>
                Total : $ {separarNumerosConDecimales(listadoFinal)}
            </p>
        </Col>
    )

})

export const TotalProductos = React.memo(() => {

    return (
        <Row  tabIndex={0} className={`mx-0 mt-3  ${styles.preciosTotales}`}>
            <Precio></Precio>
        </Row>
    )
})