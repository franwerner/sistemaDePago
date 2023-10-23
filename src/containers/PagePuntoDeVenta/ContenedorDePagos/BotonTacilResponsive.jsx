import ContenedorDeBotonesTactiles from "@/components//ContenedorDeBotonesTactiles"
import { IconCalculator } from "@/components//IconCalculator"
import { restoDelPagoContext } from "@/context//Contextos"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import React, { useContext } from "react"
import styles from "@/styles/ContenedorDePagos.module.css"

const BotonesTactilesResponsive = React.memo(() => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { modificarResto } = useContext(restoDelPagoContext)

    return (
        <>

            {
                mostrar &&
                <span
                    className={`${styles.botonesTactilesResize} position-absolute  d-flex justify-content-center  d-md-none`}>
                    <div className={`${styles.contendorDeBotonesTactiles}`}>
                        <ContenedorDeBotonesTactiles
                            modificadorDefault={modificarResto} />
                    </div>
                </span>

            }


            <IconCalculator
                mostrar={mostrar}
                alternarMostrar={alternarMostrar} />

        </>
    )

})

export default BotonesTactilesResponsive