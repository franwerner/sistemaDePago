import { calcularPorcentaje } from "@/helper//calcularPorcentaje";
import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales";
import { Table } from "react-bootstrap";


const productosTest = //En la base de datos, esto ya viene con el precio con la tarifa aplicada.
{
    venta: { tarifa: "mercadopago", porcentaje: 10, metodosDePago: [{ qr: 1000, trasferencia: 1000 }], total: 2000 },
    productos: [
        { id: 1, nombre: "Pan", metodo: "kg", cantidad: 12, descuento: 0, precio: 210 },
        { id: 2, nombre: "Factura", metodo: "und", cantidad: 12, descuento: 19, precio: 210 },
        { id: 3, nombre: "Leche", metodo: "und", cantidad: 12, descuento: 100, precio: 200 },

    ]

}

const TBody = ({ nombre, metodo, cantidad, descuento, precio }) => {

    const total = cantidad * precio

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
            <th className="fw-normal text-nowrap">
                $ {separarNumerosConDecimales(precio)}
            </th>
            <th className="fw-normal">
                {descuento}
            </th>
            <th className="fw-semibold text-nowrap">
                $ {separarNumerosConDecimales(total - descuentoAplicado)}
            </th>
        </tr>
    )
}

const TablaListaDeProductos = () => {
    return (
        <Table hover className="animate__animated animate__bounceInLeft">
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