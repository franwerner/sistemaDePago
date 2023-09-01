
import {  usePrecioFinalDeLosProductos } from "../hooks/usePrecioFinalDeLosProductos"
import React from "react"
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales"
import styles from "../styles/TotalProductos.module.css"
import { Row } from "react-bootstrap"



export const TotalPrecioProductos = React.memo(() => {

    const { precioFinal } = usePrecioFinalDeLosProductos()
    
    const {calculoConTarifa} = precioFinal

    return (
        <Row className={`mx-0 mt-3   ${styles.preciosTotales}`}>
            <p className={`${styles.precio}   d-inline-block  text-end fs-5 overflow-hidden`}>
                Total : $ {separarNumerosConDecimales(calculoConTarifa)}
            </p>
        </Row>
    )
})