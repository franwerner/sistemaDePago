import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales";
import { TablaDefault } from "@/components//TablaDefault";

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

const thead = ["Tipo","Total"]

const TablaListaDeMetodosDePago = () => {
    return (
        <TablaDefault thead = {thead}>
            {
                productosTest.venta.metodosDePago.map(item =>

                    <TBody key={item.id} {...item} />
                )
            }
        </TablaDefault>



    );
};

export default TablaListaDeMetodosDePago
