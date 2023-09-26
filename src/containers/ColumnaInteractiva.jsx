import { useEstablecerLimitesEjes } from "@/hooks/useEstablecerLimitesEjes"
import { useEjesFinales } from "@/hooks/useEjesFinales"
import { useColumna } from "@/hooks/useColumna"
import styles from "@/styles/ColumnaInteractiva.module.css"
import { useEffect } from "react"
import { Col } from "react-bootstrap"

export const ColumnaInteractiva = ({ children }) => {

    const ESTADO_INCIAL = 4



    return (
        <>
            <Col md={5}
                className={`p-0 overflow-hidden  h-100  ${styles.columnaInteractiva} d-flex`}>


                {children}


                <span
                    id="lineaInteractiva"
                    className={`d-none d-md-block overflow-hidden h-100  ${styles.linea}`}>
                </span>

            </Col >
        </>
    )

}