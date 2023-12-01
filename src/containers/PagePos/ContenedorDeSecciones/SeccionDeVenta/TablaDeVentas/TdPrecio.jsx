import DropwDownPrecio from "@/components//DropDowns/DropDownPrecio"
import { CalcularPorcentajeMemoizado } from "@/hooks//useCalcularPorcentaje"
import { memo } from "react"
import styles from "@/styles/SeccionDeVenta.module.css"




const TdPrecio = memo(({ precioModificado, modificarPrecio, nombre }) => {



    return (
        <td className={`${styles.tdPrecio} text-center p-0`}>
            <DropwDownPrecio
                modificarPrecio={modificarPrecio}
                nombre={nombre} >
                <CalcularPorcentajeMemoizado
                    n1={precioModificado}
                    n2={precioModificado} />
            </DropwDownPrecio>
        </td>
    )
})

export default TdPrecio

