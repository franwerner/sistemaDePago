import { calcularPorcentaje } from "@/common//helper/calcularPorcentaje";
import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales";
import styles from "@/styles/SeccionDeCompras.module.css"
import { TablaDefault } from "@/components//TablaDefault";

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
        <tr>
            <td
                id={styles.thProductosNombre}
                className="fw-normal text-truncate">
                {nombre}
            </td>
            <td className="fw-normal text-uppercase">
                {metodo}
            </td>
            <td className="fw-normal">
                {cantidad}
            </td>

            <td className="fw-normal   text-nowrap">
                $ {separarNumerosConDecimales(precioModificado)}
            </td>
            <td className="fw-normal">
                {descuento}%
            </td>
            <td
                id={styles.thProductosTotal}
                className="fw-semibold text-nowrap text-truncate">
                $ {separarNumerosConDecimales(total - descuentoAplicado)}
            </td>
        </tr>
    )
}

const thead = ["Producto", "Metodo", "Cantidad", "Precio", "Descuento", "Total"]

const TablaListaDeProductos = () => {

    return (
        <TablaDefault thead={thead}>
            {
                productosTest.productos.map(item =>

                    <TBody key={item.id} {...item} />
                )
            }

        </TablaDefault>

    );
};

export default TablaListaDeProductos