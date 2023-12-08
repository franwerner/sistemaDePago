import { memo } from "react";
import { useForm } from "@/hooks//useForm";
import { IconTrash } from "@/components//Icons/iconTrash";
import { TdFabricacion } from "./TdFabricacion";
import { TdVencimiento } from "./TdVencimiento";
import { TdCantidad } from "./TdCantidad";

const TdNombre = memo(({ nombre }) => {
    return (
        <td className="align-middle ls-4 fs-6">{nombre}</td>
    )
})

const TdIconTrash = memo(({ eliminarProducto, id }) => {
    return (
        <td
            onClick={() => eliminarProducto({ id })}
            className="cursor-block text-center align-middle">
            <IconTrash classAdd={"fs-4"}
            />
        </td>
    )
})

export const ListadoDeProductos = memo(({
    id,
    cantidad = 0,
    fabricacion,
    vencimiento,
    nombre,
    modificarFabricacion,
    modificarVencimiento,
    modificarCantidad,
    eliminarProducto
}) => {

    const { changeForm, form } = useForm({ fechaVec: "", fechaFab: "", cantidad: cantidad })

    return (
        <tr>

            <TdNombre nombre={nombre} />

            <TdFabricacion
                id={id}
                changeForm={changeForm}
                fechaFab={form.fechaFab}
                modificarFabricacion={modificarFabricacion}
                fabricacion={fabricacion} />


            <TdVencimiento
                id={id}
                changeForm={changeForm}
                fechaVec={form.fechaVec}
                modificarVencimiento={modificarVencimiento}
                vencimiento={vencimiento}
            />

            <TdCantidad
                changeForm={changeForm}
                cantidadForm={form.cantidad}
                modificarCantidad={modificarCantidad}
                id={id}
                cantidad={cantidad}
            />
            <TdIconTrash
                id={id}
                eliminarProducto={eliminarProducto} />

        </tr>
    );
})