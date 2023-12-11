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
    { cantidad,
        metodo,
        nombre,
        precioModificado,
        modificarCantidad,
        modificarPrecio,
        borrarProducto,
        aplicarDescuento,
        descuento }
) => {

    const obj = { nombre }

    return (
        <tr >
            <TdNombre nombre={nombre} />

            <TdMetodo metodo={metodo} />

            <TdCantidad
                obj={obj}
                modificarCantidad={modificarCantidad}
                cantidad={cantidad} />

            <TdPrecio
                precioModificado={precioModificado}
                obj={obj}
                modificarPrecio={modificarPrecio} />

            <TdDescuento
                obj={obj}
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