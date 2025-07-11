
import { useEstablecerLimitesEjes } from "@/hooks/useEstablecerLimitesEjes"
import { useEjesFinales } from "@/hooks/useEjesFinales"
import { useColumna } from "@/hooks/useColumna"
import styles from "@/styles/PlantillaCobro.module.css"
import { useEffect } from "react"
import { Col } from "react-bootstrap"

export const SeccionCobroYPagos = ({ children }) => {

    const ESTADO_INCIAL = 4

    const { ejeLimitacion, establecerLimiteIncialDocumento } = useEstablecerLimitesEjes()

    const { ejesFinales, establecerEjesFinales, clientX } = useEjesFinales(ejeLimitacion)

    const { calcularColumna, columna } = useColumna(ESTADO_INCIAL)


    const onClickMove = (e) => {
        establecerLimiteIncialDocumento(e)
        establecerEjesFinales(e)
    }

    useEffect(() => {

        calcularColumna({ "XY": { ...ejesFinales }, ejeLimitacion })

    }, [clientX, ejeLimitacion])

    return (
        <>
            <Col md={5} lg={columna}

                style={{ width: clientX }}
                className={`p-0 overflow-hidden  h-100  ${styles.seccionCobroYPagos} d-flex`}>


                {children}


                <span onMouseDown={onClickMove}
                    onMouseUp={onClickMove}
                    className={`d-none d-md-block overflow-hidden h-100  ${styles.linea}`}>
                </span>

            </Col >
        </>
    )

}