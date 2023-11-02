import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { productoReducerContext } from "@/context/Contextos";
import styles from "@/styles/SeccionDeVenta.module.css"
import ListadoDeVentas from "./ListadoDeVentas";


const TheadTabla = React.memo(() => {

    return <thead className="align-middle">
        <tr className="shadow ">
            <th className="px-3">Item</th>
            <th className="text-center">Metodo</th>
            <th className="text-center ">Cantidad</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Descuento</th>
            <th className="text-center">Total</th>
            <th></th>
        </tr>
    </thead>
})

const TablaDeVentas = React.memo(() => {

    const { listaProducto, modificarPrecio, modificarCantidad, borrarProducto, aplicarDescuento } = useContext(productoReducerContext)

    return (
        <Table className={`${styles.tablaDeVentas} `} hover>
            <TheadTabla />
            <tbody className="align-middle overflow-hidden">
                {
                    listaProducto.map(({ cantidad, metodo, nombre, precioModificado, descuento }, index) =>
                        <ListadoDeVentas
                            key={index}
                            aplicarDescuento={aplicarDescuento}
                            borrarProducto={borrarProducto}
                            modificarPrecio={modificarPrecio}
                            modificarCantidad={modificarCantidad}
                            descuento={descuento}
                            metodo={metodo}
                            precioModificado={precioModificado}
                            nombre={nombre}
                            cantidad={cantidad}
                        />)

                }
            </tbody>

        </Table>
    );
})

export default TablaDeVentas