import { Table } from "react-bootstrap";
import { ListadoDeProductos } from "./ListadoDeProductos";
import { useContext } from "react";
import { InventarioAddContext } from "@/context//Contextos";




const Tbody = () => {

    const { listaDeProductos, modificarFabricacion, modificarVencimiento, modificarCantidad, eliminarProducto } = useContext(InventarioAddContext)

    return (
        <tbody>
            {
                listaDeProductos.map(item =>
                    <ListadoDeProductos
                        key={item.id}
                        modificarVencimiento={modificarVencimiento}
                        modificarFabricacion={modificarFabricacion}
                        modificarCantidad={modificarCantidad}
                        eliminarProducto = {eliminarProducto}
                        {...item} />
                )
            }
        </tbody>
    )
}

export const TablaDeProductos = () => {

    return (
        <Table hover className="h-100 border" >
            <thead
                style={{ height: "60px" }}
                className="align-middle position-relative">
                <tr className="shadow">
                    <th className="px-3">Producto</th>
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