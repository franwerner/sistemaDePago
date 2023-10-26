import React, { useContext } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { productoReducerContext } from "../context/Contextos";
import styles from "@/styles/TablaDeProductos.module.css"
import { useForm } from "../hooks/useForm";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";

const Cantidad = ({ cantidad, restarProducto, sumarProducto, nombre }) => {

    const restar = () => {
        restarProducto({ nombre })
    }
    const sumar = () => {
        sumarProducto({ nombre })
    }

    return (
        <>
            <Button
                onClick={restar}
                variant="none"
                className=" p-0 border-0 d-flex align-items-center">
                <i className="fa-solid fa-minus  rounded-2 text-white p-1 "></i>
            </Button>

            <Form.Control
                id="cantidad"
                aria-describedby="cantidadTable"
                type="number"
                value={cantidad}
                className="mx-1 px-1 text-center"
            />

            <Button
                onClick={sumar}
                variant="none"
                className="p-0 d-flex border-0 align-items-center">
                <i className="fa-solid  rounded-2 text-white p-1 fa-plus"></i>
            </Button>
        </>

    )
}

const Precio = ({ precio }) => {

    const { changeForm, form } = useForm({ precio: precio })

    const precioNumber = parseFloat(form.precio)

    return (
        <div className="d-flex justify-content-center">
            <Form.Control
                onChange={changeForm}
                aria-describedby="precioTable"
                type="number"
                name="precio"
                value={precioNumber}
                className="px-1 text-center"
            />
        </div>
    )
}

const Porcentaje = () => {

    return (
        <div className="d-flex justify-content-center">
            <Form.Control
                id="porcentaje"
                aria-describedby="porcentajeTabla"
                type="number"
                className="text-center"
            />
        </div>

    )
}

const ListadoDeProductos = React.memo(({ cantidad, metodo, nombre, precio, restarProducto, sumarProducto }) => {

    return (
        <tr >
            <td className={`${styles.tdNombre} text-truncate`}>{nombre}</td>

            <td className="text-uppercase text-center">
                {metodo}
            </td>

            <td className={`${styles.tdCantidad} d-flex justify-content-center`}>
                <Cantidad
                    nombre={nombre}
                    restarProducto={restarProducto}
                    sumarProducto={sumarProducto}
                    cantidad={cantidad} />
            </td>

            <td className={`${styles.tdPrecio} p-0`}>
                <Precio precio={precio} />
            </td>

            <td className={`${styles.tdPorcentaje} text-center`}>
                <Porcentaje />
            </td>

            <td className={`${styles.tdTotal} text-center fw-semibold text-truncate`}> {separarNumerosConDecimales(cantidad * precio)} </td>

            <td>
                <i className={`${styles.tdIconTrash} fa-regular fa-trash-can fs-5`}></i>
            </td>
        </tr>
    )
})

const TablaDeProductos = () => {

    const { listaProducto, restarProducto, sumarProducto } = useContext(productoReducerContext)

    return (
        <Table className={`${styles.tablaProductos} `} hover>
            <thead className="align-middle">
                <tr className="shadow ">
                    <th>Item</th>
                    <th className="text-center">Metodo</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-center">Precio</th>
                    <th className="text-center">Porcentaje</th>
                    <th className="text-center">Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="align-middle overflow-hidden">
                {
                    listaProducto.map(({ cantidad, metodo, nombre, precio }, index) =>
                        <ListadoDeProductos
                            key={index}
                            restarProducto={restarProducto}
                            sumarProducto={sumarProducto}
                            metodo={metodo}
                            precio={precio}
                            nombre={nombre}
                            cantidad={cantidad}
                        />)

                }
            </tbody>

        </Table>
    );
};

export default TablaDeProductos