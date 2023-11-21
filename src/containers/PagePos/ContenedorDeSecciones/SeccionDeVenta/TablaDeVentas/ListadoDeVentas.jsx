import styles from "@/styles/SeccionDeVenta.module.css"
import React from "react"
import TdCantidad from "./TdCantidad"
import TdPrecio from "./TdPrecio"
import TdDescuento from "./TdDescuento"
import { TdTrash } from "./TdTrash"
import { TdTotal } from "./TdTotal"
import { verificarSiEsNegativo } from "@/common//helper/verificarSiEsNegativo"

const TdNombre = React.memo(({ nombre }) => {

    return <td className={`${styles.tdNombre} text-truncate`}>
        {nombre}
    </td>
})

const TdMetodo = React.memo(({ metodo }) => {

    return <td className={`text-uppercase p-0 text-center`}>
        <p className="m-0">{metodo}</p>
    </td>
})

const ListadoDeVentas = React.memo(({ cantidad, metodo, nombre, precioModificado, modificarCantidad, modificarPrecio, borrarProducto, aplicarDescuento, descuento }) => {

    return (
        <tr >

            <TdNombre nombre={nombre} />

            <TdMetodo metodo={metodo} />

            <TdCantidad
                modificarCantidad={modificarCantidad}
                nombre={nombre}
                cantidad={cantidad} />

            <TdPrecio
                precioModificado={precioModificado}
                nombre={nombre}
                modificarPrecio={modificarPrecio} />

            <TdDescuento
                nombre={nombre}
                descuento={verificarSiEsNegativo(cantidad) ? 0 : descuento}
                aplicarDescuento={aplicarDescuento} />

            <TdTotal
                descuento={descuento}
                precioModificado={precioModificado}
                cantidad={cantidad}
            />

            <TdTrash
                borrarProducto={borrarProducto}
                nombre={nombre} />
        </tr>
    )
})


export default ListadoDeVentas