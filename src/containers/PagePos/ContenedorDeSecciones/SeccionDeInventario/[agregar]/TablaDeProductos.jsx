import { Table } from "react-bootstrap";

export const TablaDeProductos = () => {

    return (
        <Table hover className="h-100 border" >
            <thead
                style={{ height: "60px" }}
                className="align-middle position-relative">
                <tr className="shadow">
                    <th className="px-3">Producto</th>
                    <th className="text-center">Fabricacion</th>
                    <th className="text-center ">Vencimiento</th>
                    <th className="text-center">Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>asda</td>
                    <td>asda</td>
                    <td>asda</td>
                    <td>asda</td>
                    <td>X</td>
                </tr>
            </tbody>
        </Table>
    );
};