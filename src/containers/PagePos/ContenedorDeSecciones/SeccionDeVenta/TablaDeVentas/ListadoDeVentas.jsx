import styles from "@/styles/SeccionDeVenta.module.css"
import TdCantidad from "./TdCantidad"
import TdPrecio from "./TdPrecio"
import TdDescuento from "./TdDescuento"
import { TdTotal } from "./TdTotal"
import { verificarSiEsNegativo } from "@/common//helper/verificarSiEsNegativo"
import { memo } from "react"
import { IconTrash } from "@/components//Icons/iconTrash"

const TdNombre = memo(({ nombre }) => {

    return <td className={`${styles.tdNombre} text-truncate`}>
        {nombre}
    </td>
})

const TdMetodo = memo(({ metodo }) => {

    return <td className={`text-uppercase p-0 text-center`}>
        <p className="m-0">{metodo}</p>
    </td>
})

const TdLote = memo(({ lote = "" }) => {
    return (
        <td className="text-center fw-bolder text-ligthdark">
            #{lote}
        </td>
    )
})

const TdTrash = memo(({ borrarProducto, nombre }) => {
    const onClick = () => {
        borrarProducto({ nombre })
    }

    return (

        <td className="p-0 text-center"  >
            <IconTrash classAdd={"fs-5"} borrarItem={onClick} />
        </td>
    );
})

const ListadoDeVentas = memo((
    { cantidad, lote, metodo, nombre, precioModificado,
        modificarCantidad, modificarPrecio, borrarProducto,
        aplicarDescuento, descuento }
) => {

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

            <TdLote lote={lote} />

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