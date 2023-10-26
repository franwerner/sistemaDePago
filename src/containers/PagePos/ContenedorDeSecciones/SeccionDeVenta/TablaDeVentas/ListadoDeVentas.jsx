import { calcularPorcentaje } from "@/helper//calcularPorcentaje"
import styles from "@/styles/SeccionDeVenta.module.css"
import React from "react"
import TdCantidad from "./TdCantidad"
import TdPrecio from "./TdPrecio"
import TdDescuento from "./TdDescuento"
import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales"

const ListadoDeVentas = React.memo(({ cantidad, metodo, nombre, precioModificado, modificarCantidad, modificarPrecio, borrarProducto, aplicarDescuento, descuento }) => {

    const porcentaje = calcularPorcentaje({ numero: precioModificado * cantidad, porcentaje: descuento })

    return (
        <tr >
            <td className={`${styles.tdNombre} text-truncate`}>{nombre}</td>

            <td  className={`text-uppercase p-0 text-center`}>
                <p className="m-0">{metodo}</p>
            </td>

            <td  className={`${styles.tdCantidad} scrollBarPersonalizada d-flex justify-content-center`}>
                <TdCantidad
                    modificarCantidad={modificarCantidad}
                    nombre={nombre}
                    cantidad={cantidad} />
            </td>

            <td className={`${styles.tdPrecio} p-0`}>
                <TdPrecio
                    precioModificado={precioModificado}
                    nombre={nombre}
                    modificarPrecio={modificarPrecio} />
            </td>

            <td className={`${styles.tdDescuento} text-center`}>
                <TdDescuento
                    nombre={nombre}
                    descuento={descuento}
                    aplicarDescuento={aplicarDescuento} />
            </td>

            <td className={`${styles.tdTotal} text-center fw-semibold text-truncate`}>
                {separarNumerosConDecimales((cantidad * precioModificado) - porcentaje)}
            </td>

            <td>
                <i
                    onClick={() => borrarProducto({ nombre })}
                    className={`${styles.tdIconTrash}  fa-regular fa-trash-can fs-5`}></i>
            </td>
        </tr>
    )
})


export default ListadoDeVentas