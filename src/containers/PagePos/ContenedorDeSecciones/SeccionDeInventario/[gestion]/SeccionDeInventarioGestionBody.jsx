import { TablaDefault } from "@/components//TablaDefault";
import { lazy } from "react";
import { Col } from "react-bootstrap";

const ContenedorVacio = lazy(() => import("@/components//ContenedorVacio"))
const SvgBarCode = lazy(() => import("@/components//Svg/SvgBarCode"))


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

    const gestion = [1]

    return (
        <Col className="shadow h-100 p-0 scrollBarPersonalizada">

            {
                gestion.length > 0 ?
                    <TablaDefault thead={thead} >

                        {
                            Array.from({ length: 20 }).map((_, index) => {
                                return (
                                    <ListaTabla key={index} />
                                )
                            })
                        }

                    </TablaDefault>


                    :
                    <ContenedorVacio texto={"No se encontro ningun producto"}>
                        <SvgBarCode />
                    </ContenedorVacio>

            }

        </Col>
    );
};