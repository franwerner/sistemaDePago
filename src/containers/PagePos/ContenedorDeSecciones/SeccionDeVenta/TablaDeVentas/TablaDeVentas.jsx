import React, { memo, useContext } from "react";
import { Table } from "react-bootstrap";
import { productoReducerContext } from "@/context/Contextos";
import styles from "@/styles/SeccionDeVenta.module.css"
import ListadoDeVentas from "./ListadoDeVentas";
import { QueryParamsContext } from "@/context//Contextos";
import { useAlgoritmoDeOrden } from "@/hooks//useAlgoritmoDeOrden";

const TheadTabla = memo(() => {

    return <thead className="align-middle">
        <tr className="shadow ">
            <th className="px-3">Item</th>
            <th className="text-center">Metodo</th>
            <th className="text-center ">Cantidad</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Descuento</th>
            <th className="text-center">Lote</th>
            <th className="text-center">Total</th>
            <th></th>
        </tr>
    </thead>
})

const TablaDeVentas = memo(() => {

    const { listaProducto, modificarPrecio, modificarCantidad, borrarProducto, aplicarDescuento } = useContext(productoReducerContext)

    const { queryParams } = useContext(QueryParamsContext)

    const { iniciarSort } = useAlgoritmoDeOrden(queryParams)

    return (
        <Table className={`${styles.tablaDeVentas} `} hover>
            <TheadTabla />
            <tbody className="align-middle overflow-hidden">
                {
                    iniciarSort(listaProducto).map((item, index) =>
                        <ListadoDeVentas
                            key={index}
                            aplicarDescuento={aplicarDescuento}
                            borrarProducto={borrarProducto}
                            modificarPrecio={modificarPrecio}
                            modificarCantidad={modificarCantidad}
                            {...item}
                        />)
                }
            </tbody>

        </Table>
    );
})

export default TablaDeVentas