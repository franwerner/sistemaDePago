import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales";
import { Table } from "react-bootstrap";

const productosTest =
{
    venta: { tarifa: "mercadopago", porcentaje: 10, metodosDePago: [{ id: 2, tipo: "trasferencia", monto: 1000 }, { id: 1, tipo: "qr", monto: 1000 },], total: 2000 },
}


const TBody = ({ monto, tipo }) => {

    return (
        <tr className="text-center">
            <th className="text-uppercase fw-normal">{tipo}</th>
            <th className="fw-semibold text-nowrap">$ {separarNumerosConDecimales(monto)}</th>
        </tr>
    )
}

const TablaListaDeMetodosDePago = () => {
    return (
        <Table hover >
            <thead className=" align-middle text-center  ">
                <tr>
                    <th className="p-3">Tipo</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                {
                    productosTest.venta.metodosDePago.map(item =>

                        <TBody key={item.id} {...item} />
                    )
                }
            </tbody>
        </Table >
    );
};

export default TablaListaDeMetodosDePago
