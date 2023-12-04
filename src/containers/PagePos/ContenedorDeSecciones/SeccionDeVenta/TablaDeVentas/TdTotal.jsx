import { calcularPorcentaje } from "@/common//helper/calcularPorcentaje";
import { CalcularPorcentajeMemoizado } from "@/hooks//useCalcularPorcentaje";
import styles from "@/styles/SeccionDeVenta.module.css"
import  { memo } from "react";

export const TdTotal = memo(({ precioModificado, cantidad, descuento }) => {

    const total = precioModificado * cantidad

    const porcentaje = calcularPorcentaje({ numero: total, porcentaje: descuento })

    return (
        <td className={`${styles.tdTotal} text-center fw-semibold text-truncate`}>
            <CalcularPorcentajeMemoizado
                n1={total - porcentaje}
                n2={total - porcentaje} />
        </td>
    )
})