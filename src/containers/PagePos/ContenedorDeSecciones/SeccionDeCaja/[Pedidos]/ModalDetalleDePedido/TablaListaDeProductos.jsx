import { calcularPorcentaje } from "@/helper//calcularPorcentaje";
import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { Table } from "react-bootstrap";
import styles from "@/styles/SeccionDeCaja.module.css"

const productosTest = //En la base de datos, esto ya viene con el precio con la tarifa aplicada.
{
    venta: { tarifa: "mercadopago", porcentaje: 10, metodosDePago: [{ qr: 1000, trasferencia: 1000 }], total: 2000 },
    productos: [
        { id: 1, nombre: "Pan", metodo: "kg", cantidad: 12, descuento: 0, precio: 210, precioModificado: 100, editado: true },
        { id: 2, nombre: "Factura", metodo: "und", cantidad: 12, descuento: 19, precio: 210, precioModificado: 210, editado: false },
        { id: 3, nombre: "Leche", metodo: "und", cantidad: 12, descuento: 100, precio: 210, precioModificado: 210, editado: false },
    ]
}

const ThEditado = ({ editado, precio }) => {
    const { alternarMostrar, mostrar } = useEventoMostrar()


    const isEditado = editado ? "si" : "no"

    return (
        <th
            onClick={alternarMostrar}
            className={`${styles.precioModificado} ${editado && "text-danger"} fw-medium text-uppercase`}>
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
        <tr
            className="text-center">
            <th className="fw-normal">
                {nombre}
            </th>
            <th className="fw-normal text-uppercase">
                {metodo}
            </th>
            <th className="fw-normal">
                {cantidad}
            </th>

            <ThEditado editado={editado} precio={precio} />

            <th className="fw-normal text-nowrap">
                $ {separarNumerosConDecimales(precioModificado)}
            </th>
            <th className="fw-normal">
                {descuento}%
            </th>
            <th className="fw-semibold text-nowrap">
                $ {separarNumerosConDecimales(total - descuentoAplicado)}
            </th>
        </tr>
    )
}

const TablaListaDeProductos = () => {

    return (
        <Table hover >
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