import { calcularPorcentaje } from "@/common//helper/calcularPorcentaje";
import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { Table } from "react-bootstrap";
import styles from "@/styles/SeccionDeCompras.module.css"

const productosTest = //En la base de datos, esto ya viene con el precio con la tarifa aplicada.
{
    venta: { tarifa: "mercadopago", porcentaje: 10, metodosDePago: [{ qr: 1000, trasferencia: 1000 }], total: 2000 },
    productos: [
        { id: 1, nombre: "Pan", metodo: "kg", cantidad: 12, descuento: 0, precio: 210, precioModificado: 100, editado: true },
        { id: 2, nombre: "Factura de dulcefffffffffffffffffffffffffffff ", metodo: "und", cantidad: 12444, descuento: 19, precio: 210, precioModificado: 210, editado: false },
        { id: 3, nombre: "Leche", metodo: "und", cantidad: 12, descuento: 100, precio: 210, precioModificado: 210, editado: false },
    ]
}

const ThEditado = ({ editado, precio }) => {
    const { alternarMostrar, mostrar } = useEventoMostrar()


    const isEditado = editado ? "si" : "no"

    return (
        <th
            onClick={alternarMostrar}
            className={`${editado && "text-danger"} bg-hover cursor-pointer fw-medium text-uppercase`}>
            {
                !mostrar ?
                    isEditado
                    :
                    `$ ${separarNumerosConDecimales((precio))}`
            }
        </th>
    )

}

const TBody = ({ nombre, metodo, cantidad, descuento, editado, precioModificado, precio }) => {

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

            <ThEditado editado={editado} precio={precio} />

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
                    <th>Modificado</th>
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