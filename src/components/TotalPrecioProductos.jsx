
import { usePrecioFinalDeLosProductos } from "@/hooks/usePrecioFinalDeLosProductos"
import React from "react"
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import styles from "@/styles/TotalProductos.module.css"
import { Row } from "react-bootstrap"



const ObtenerPrecioTotal = () => {
    const { calculoConTarifa } = usePrecioFinalDeLosProductos()

    return separarNumerosConDecimales(calculoConTarifa)
}


export const TotalPrecioProductos = React.memo(() => {

    return (
        <Row className="mx-0 mt-3 overflow-hidden ">
            <p className={`${styles.precio} position-relative text-nowrap fw-semibold  d-inline-block  text-end text-truncate p-0 fs-5`}>
                Total : $ <ObtenerPrecioTotal />
            </p>
        </Row>
    )
})