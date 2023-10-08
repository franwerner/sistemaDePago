
import { usePrecioFinalDeLosProductos } from "@/hooks/usePrecioFinalDeLosProductos"
import React from "react"
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import styles from "@/styles/TotalProductos.module.css"
import { Row } from "react-bootstrap"



export const TotalPrecioProductos = React.memo(() => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { calculoConTarifa } = precioFinal

    return (
        <Row className="mx-0 mt-3 overflow-hidden ">
            <p className={`${styles.precio} position-relative text-nowrap fw-semibold  d-inline-block  text-end text-truncate p-0 fs-5`}>
                Total : $ {separarNumerosConDecimales(calculoConTarifa)}
            </p>
        </Row>
    )
})