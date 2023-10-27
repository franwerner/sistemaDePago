import { Col } from "react-bootstrap";
import { productoReducerContext } from "@/context//Contextos";
import { lazy, useContext } from "react";
import Ticket from "@/components//Ticket";

const CarritoDeProductoVacio = lazy(() => import("@/components//CarritoDeProductoVacio"))
const TablaDeVentas = lazy(() => import("./TablaDeVentas/TablaDeVentas"))

const ContenedorDeCarrito = () => {

    const { listaProducto } = useContext(productoReducerContext)
    return (
        <>
            <Col className="m-0 p-0 shadow h-100  scrollBarPersonalizada ">
                {
                    listaProducto.length == 0 ?
                        <CarritoDeProductoVacio /> :
                        <TablaDeVentas />
                }

            </Col>
            <Col
                style={{ marginLeft: "4px" }}
                className="d-none d-md-block shadow-sm  h-100   p-0"
                xs={4}>

                <Ticket />

            </Col>
        </>
    );
};


export default ContenedorDeCarrito