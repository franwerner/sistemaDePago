import styles from "@/styles/ColumnaInteractiva.module.css"
import React, { useEffect } from "react"
import { Col } from "react-bootstrap"

export const ColumnaInteractiva = React.memo(({ children, mostrar }) => {

    const ESTADO_INCIAL = 4

    const onHide = !mostrar ? "d-flex" : "d-none"

    return (
        <>
            <Col xs={12} md={6} lg={6} xl={5} xxl={4}
                className={`p-0 overflow-hidden  h-100  ${styles.columnaInteractiva} ${onHide}`}>


                {children}


                <span
                    id="lineaInteractiva"
                    className={`d-none d-md-block overflow-hidden h-100  ${styles.linea}`}>
                </span>

            </Col >
        </>
    )

})