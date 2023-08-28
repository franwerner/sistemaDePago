
import { useListadoFinalProducto } from "../hooks/useListadoFinalProducto"
import React from "react"
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales"
import styles from "../styles/TotalProductos.module.css"
import { Row } from "react-bootstrap"



export const TotalProductos = React.memo(() => {

    const { listadoFinal } = useListadoFinalProducto()
    return (
        <Row className={`mx-0 mt-3   ${styles.preciosTotales}`}>
            <p className={`${styles.precio}   d-inline-block  text-end fs-5 overflow-hidden`}>
                Total : $ {separarNumerosConDecimales(listadoFinal)}
            </p>
        </Row>
    )
})