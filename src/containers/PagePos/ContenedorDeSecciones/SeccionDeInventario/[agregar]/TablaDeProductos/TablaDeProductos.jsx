import { ListadoDeProductos } from "./ListadoDeProductos";
import { useContext } from "react";
import { InventarioAddContext, QueryParamsContext } from "@/context//Contextos";
import { useAlgoritmoDeOrden } from "@/hooks//useAlgoritmoDeOrden";
import { TablaDefault } from "@/components//TablaDefault";


const thead = ["Producto", "Fabricacion", "Vencimiento", "Cantidad", ""]

export const TablaDeProductos = () => {

    const { listaDeProductos, modificarFabricacion, modificarVencimiento, modificarCantidad, eliminarProducto } = useContext(InventarioAddContext)

    const { queryParams } = useContext(QueryParamsContext)

    const { iniciarSort } = useAlgoritmoDeOrden(queryParams["orden"])


    return (
        <TablaDefault thead={thead}>
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
        </TablaDefault>
    );
};