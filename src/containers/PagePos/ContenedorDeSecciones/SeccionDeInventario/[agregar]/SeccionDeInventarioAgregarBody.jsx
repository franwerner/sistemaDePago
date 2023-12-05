import { SvgContenedorVacio } from "@/components//Svg/SvgContenedorVacio";
import { Col } from "react-bootstrap";
import { TablaDeProductos } from "./TablaDeProductos";


export const SeccionDeInventarioAgregarBody = () => {
    const listContenedor = []
    return (

        <Col className="m-0 p-0 shadow h-100  scrollBarPersonalizada">
            {
                listContenedor.length == 1 ?
                    <div className="text-center">
                        <SvgContenedorVacio />
                        <p className="m-0 fw-semibold fs-5 text-ligthdark">No hay producto seleccionados.</p>
                    </div>
                    :
                    <div>
                        <TablaDeProductos />
                    </div>
            }
        </Col>

    );
};