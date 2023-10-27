import DropwDownPrecio from "@/components//DropDownPrecio"
import { CalcularPorcentajeMemoizado } from "@/hooks//useCalcularPorcentaje"
import React from "react"
import styles from "@/styles/SeccionDeVenta.module.css"




const TdPrecio = React.memo(({ precioModificado, modificarPrecio, nombre }) => {



    return (
        <td  className={`${styles.tdPrecio} text-center p-0`}>
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

