import React from "react"
import styles from "@/styles/TotalProductos.module.css"
import { Row } from "react-bootstrap"
import { PrecioFinalMemoizado } from "../hooks/useSumaTotalDeProductos"



const TotalPrecioProductos = React.memo(() => {

    return (
        <Row className="mx-0 mt-3 overflow-hidden ">
            <p className={`${styles.precio} position-relative text-nowrap fw-semibold  d-inline-block  text-end text-truncate p-0 fs-5`}>
                Total : $ <PrecioFinalMemoizado />
            </p>
        </Row>
    )
})


export default TotalPrecioProductos