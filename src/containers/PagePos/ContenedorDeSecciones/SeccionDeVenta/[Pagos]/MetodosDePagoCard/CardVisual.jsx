import { memo } from "react"
import styles from "@/styles/MetodosDePagoCard.module.css"

const iconType = {
    "efectivo": "fa-solid fa-money-bill",
    "tarjeta": "fa-regular fa-credit-card",
    "qr": "fa-solid fa-qrcode",
    "transferencia": "fa-solid fa-building-columns",
}



export const CardVisual = memo(({ tipo, nombre }) => {

    return (
        <>
            <div className={`${styles.iconContainer} ${styles[tipo]} d-flex justify-content-center align-items-center`}>
                <i className={`${iconType[tipo]} text-primary-2 `}></i>
            </div>
            <p
                style={{ maxWidth: "200px" }}
                className="fw-semibold fs-6  text-center text-truncate">{nombre}</p>
        </>
    )
})