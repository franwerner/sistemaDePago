import { SvgContenedorVacio } from "@/components//Svg/SvgContenedorVacio";
import { Col } from "react-bootstrap";
import { TablaDeProductos } from "./TablaDeProductos/TablaDeProductos";
import { lazy, useContext } from "react";
import { InventarioAddContext } from "@/context//Contextos";

const ContenedorVacio = lazy(() => import("@/components//ContenedorVacio"))

export const SeccionDeInventarioAgregarBody = () => {
    const { listaDeProductos } = useContext(InventarioAddContext)

    return (

        <Col className="m-0 p-0 shadow h-100 scrollBarPersonalizada">
            {
                listaDeProductos.length == 0 ?
                    <ContenedorVacio ruta="/pos/inventario" texto={"No hay producto seleccionados."}>
                        <SvgContenedorVacio />
                    </ContenedorVacio>
                    :
                    <div>
                        <TablaDeProductos />
                    </div>
            }
        </Col>

    );
};