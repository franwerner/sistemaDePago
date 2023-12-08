import { SvgContenedorVacio } from "@/components//Svg/SvgContenedorVacio";
import { Col } from "react-bootstrap";
import { TablaDeProductos } from "./TablaDeProductos/TablaDeProductos";
import { useContext } from "react";
import { InventarioAddContext } from "@/context//Contextos";

export const SeccionDeInventarioAgregarBody = () => {
    const { listaDeProductos } = useContext(InventarioAddContext)


    return (

        <Col className="m-0 p-0 shadow h-100 scrollBarPersonalizada">
            {
                listaDeProductos.length == 0 ?
                    <div className="text-center h-100 d-flex justify-content-center flex-column align-items-center">
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