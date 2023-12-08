import { Table } from "react-bootstrap";
import { ListadoDeProductos } from "./ListadoDeProductos";
import { useContext } from "react";
import { InventarioAddContext, QueryParamsContext } from "@/context//Contextos";
import { useAlgoritmoDeOrden } from "@/hooks//useAlgoritmoDeOrden";
import { tHead } from "@/styles/SeccionDeInventario.module.css"

const Tbody = () => {

    const { listaDeProductos, modificarFabricacion, modificarVencimiento, modificarCantidad, eliminarProducto } = useContext(InventarioAddContext)

    const { queryParams } = useContext(QueryParamsContext)

    const { iniciarSort } = useAlgoritmoDeOrden(queryParams)

    return (
        <tbody>
            {
                iniciarSort(listaDeProductos).map(item =>
                    <ListadoDeProductos
                        key={item.id}
                        modificarVencimiento={modificarVencimiento}
                        modificarFabricacion={modificarFabricacion}
                        modificarCantidad={modificarCantidad}
                        eliminarProducto={eliminarProducto}
                        {...item} />
                )
            }
        </tbody>
    )
}

export const TablaDeProductos = () => {


    return (
        <Table hover className="h-100" >
            <thead
                id={tHead}
                className="align-middle border-white position-relative">
                <tr className="shadow">
                    <th className="px-2">Producto</th>
                    <th className="text-center">Fabricacion</th>
                    <th className="text-center ">Vencimiento</th>
                    <th className="text-center">Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <Tbody />
        </Table>
    );
};