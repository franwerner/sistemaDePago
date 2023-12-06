import { memo, useEffect } from "react";
import { useForm } from "@/hooks//useForm";
import { Form } from "react-bootstrap";
import { obtenerFecha } from "@/common//helper/obtenerFecha";
import { IconTrash } from "@/components//Icons/iconTrash";


const TdCantidad = memo(({ cantidad, modificarCantidad, id }) => {

    const { changeForm, form } = useForm({ cant: 0 })

    useEffect(() => {

        if (form.cant !== 0) {
            modificarCantidad({ id, cantidad: Math.abs(form.cant) })
        }

    }, [form.cant])

    return (
        <td>
            <Form.Control
                name="cant"
                onChange={changeForm}
                aria-label="cantidad"
                value={cantidad}
                step={"0.1"}
                type="number">
            </Form.Control>
        </td>
    )
})

const TdFabricacion = memo(({ fabricacion, modificarFabricacion, id }) => {

    const { changeForm, form } = useForm({ fecha: "" })

    const { dia, mes, año } = obtenerFecha(fabricacion)

    useEffect(() => {
        if (form.fecha.length !== 0) {

            modificarFabricacion({ id, fabricacion: new Date(form.fecha + 'T00:00:00').getTime() })
        }
    }, [form.fecha])

    return (
        <td className="text-center">
            <Form.Control
                name="fecha"
                onChange={changeForm}
                aria-label="fabricacion fecha"
                defaultValue={`${año}-${mes}-${dia}`}
                type="date">
            </Form.Control>
        </td>
    );

})

const TdVencimiento = ({ vencimiento, modificarVencimiento, id }) => {
    const { changeForm, form } = useForm({ fecha: "" })

    const { dia, mes, año } = obtenerFecha(vencimiento)

    useEffect(() => {
        if (form.fecha.length !== 0) {

            modificarVencimiento({ id, fabricacion: new Date(form.fecha + 'T00:00:00').getTime() })
        }
    }, [form.fecha])

    return (
        <td className="text-center">
            <Form.Control
                name="fecha"
                onChange={changeForm}
                aria-label="vencimiento fecha"
                defaultValue={`${año}-${mes}-${dia}`}
                type="date">
            </Form.Control>
        </td>
    );
};

export const ListadoDeProductos = memo(({ id, cantidad, fabricacion, vencimiento, nombre, modificarFabricacion, modificarVencimiento, modificarCantidad, eliminarProducto }) => {

    return (
        <tr>
            <td>{nombre}</td>

            <TdFabricacion
                id={id}
                modificarFabricacion={modificarFabricacion}
                fabricacion={fabricacion} />


            <TdVencimiento
                id={id}
                modificarVencimiento={modificarVencimiento}
                vencimiento={vencimiento}
            />

            <TdCantidad
                modificarCantidad={modificarCantidad}
                id={id}
                cantidad={cantidad}
            />
            <td
                onClick={() => eliminarProducto({ id })}
                className="cursor-block align-middle">
                <IconTrash classAdd={"fs-4"} />
            </td>
        </tr>
    );
})