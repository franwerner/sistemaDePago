import { calcularPorcentaje } from "@/helper//calcularPorcentaje";
import { verificarSiEsNegativo } from "@/helper//verificarSiEsNegativo";
import { CalcularPorcentajeMemoizado } from "@/hooks//useCalcularPorcentaje";
import styles from "@/styles/SeccionDeVenta.module.css"
import React from "react";

export const TdTotal = React.memo(({ precioModificado, cantidad, descuento }) => {

    const total = precioModificado * cantidad

    const porcentaje = calcularPorcentaje({ numero: total, porcentaje: descuento })

    const verificacion = verificarSiEsNegativo(porcentaje) ? 0 : porcentaje

    return (
        <td className={`${styles.tdTotal} text-center fw-semibold text-truncate`}>
            <CalcularPorcentajeMemoizado
                n1={total - verificacion}
                n2={total - verificacion} />
        </td>
    )
})