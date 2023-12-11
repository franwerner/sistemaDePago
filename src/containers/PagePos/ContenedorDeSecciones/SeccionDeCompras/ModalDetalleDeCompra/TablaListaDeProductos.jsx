import { calcularPorcentaje } from "@/common//helper/calcularPorcentaje";
import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { Table } from "react-bootstrap";
import styles from "@/styles/SeccionDeCompras.module.css"

const productosTest = //En la base de datos, esto ya viene con el precio con la tarifa aplicada.
{
    venta: { tarifa: "mercadopago", porcentaje: 10, metodosDePago: [{ qr: 1000, trasferencia: 1000 }], total: 2000, fecha: 1701233016968 },
    productos: [
        { id: 1, nombre: "Pan", metodo: "kg", cantidad: 12, descuento: 0, precio: 210, precioModificado: 100, editado: true },
        { id: 2, nombre: "Factura de dulcefffffffffffffffffffffffffffff ", metodo: "u", cantidad: 12444, descuento: 19, precio: 210, precioModificado: 210, editado: false },
        { id: 3, nombre: "Leche", metodo: "u", cantidad: 12, descuento: 100, precio: 210, precioModificado: 210, editado: false },
    ],
}



const TBody = ({ nombre, metodo, cantidad, descuento, precioModificado }) => {

    const total = cantidad * precioModificado

    const descuentoAplicado = calcularPorcentaje({ numero: total, porcentaje: descuento })

    return (
        <tr className="text-center">
            <th
                id={styles.thProductosNombre}
                className="fw-normal text-truncate   ">
                {nombre}
            </th>
            <th className="fw-normal  text-truncate   text-uppercase">
                {metodo}
            </th>
            <th className="fw-normal  text-truncate  ">
                {cantidad}
            </th>

            <th className="fw-normal  text-truncate   text-nowrap">
                $ {separarNumerosConDecimales(precioModificado)}
            </th>
            <th className="fw-normal">
                {descuento}%
            </th>
            <th
                id={styles.thProductosTotal}
                className="fw-semibold text-nowrap text-truncate">
                $ {separarNumerosConDecimales(total - descuentoAplicado)}
            </th>
        </tr>
    )
}

const TablaListaDeProductos = () => {

    return (
        <Table className={`${styles.tablaListaDeProductos} d-block  m-0`} hover >
            <thead className=" align-middle text-center  ">
                <tr>
                    <th className="p-3">Item</th>
                    <th>Metodo</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                {
                    productosTest.productos.map(item =>

                        <TBody key={item.id} {...item} />
                    )
                }
            </tbody>
        </Table >
    );
};

export default TablaListaDeProductos