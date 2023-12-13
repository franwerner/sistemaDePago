import React, { memo, useContext } from "react";
import { productoReducerContext } from "@/context/Contextos";
import ListadoDeVentas from "./ListadoDeVentas";
import { QueryParamsContext } from "@/context//Contextos";
import { useAlgoritmoDeOrden } from "@/hooks//useAlgoritmoDeOrden";
import { TablaDefault } from "@/components//TablaDefault";

const thead = ["Producto", "Metodo", "Cantidad", "Precio", "Descuento", "Total", ""]

const TablaDeVentas = memo(() => {

    const { listaProducto, modificarPrecio, modificarCantidad, borrarProducto, aplicarDescuento } = useContext(productoReducerContext)

    const { queryParams } = useContext(QueryParamsContext)

    const { iniciarSort } = useAlgoritmoDeOrden(queryParams["orden"])

    return (
        <TablaDefault thead={thead}>
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
        </TablaDefault>
    );
})

export default TablaDeVentas