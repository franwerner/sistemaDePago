import { calcularPorcentaje } from "@/helper//calcularPorcentaje";
import { CalcularPorcentajeMemoizado } from "@/hooks//useCalcularPorcentaje";
import styles from "@/styles/SeccionDeVenta.module.css"
import React from "react";

export const TdTotal = React.memo(({precioModificado,cantidad,descuento}) => {

    const total = precioModificado * cantidad
    const porcentaje = calcularPorcentaje({ numero: total, porcentaje: descuento })


    return (
        <td className={`${styles.tdTotal} text-center fw-semibold text-truncate`}>
        <CalcularPorcentajeMemoizado
            n1={total}
            n2={total - porcentaje} />
    </td>
    )
})