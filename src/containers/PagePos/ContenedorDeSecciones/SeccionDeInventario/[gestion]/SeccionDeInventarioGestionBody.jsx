import { TablaDefault } from "@/components//TablaDefault";
import { Col } from "react-bootstrap";

const thead = ["Nombre", "Vencimiento", "Fabricacion", "Cantidad"]


const ListaTabla = () => {
    return (
        <tr>
            <td>
                ProductTest
            </td>
            <td className="fw-medium text-ligthdark">
                17/04/2023
            </td>
            <td>
                17/04/2022
            </td>
            <td className="text-ligthdark fw-semibold">
                {(13).toFixed(2)}
            </td>
        </tr>
    )
}


export const SeccionDeInventarioGestionBody = () => {

    return (
        <Col className="shadow h-100 p-0 scrollBarPersonalizada">
            <TablaDefault thead={thead} >

                {
                    Array.from({ length: 20 }).map((_, index) => {
                        return (
                            <ListaTabla key={index} />
                        )
                    }

                    )
                }

            </TablaDefault>
        </Col>
    );
};