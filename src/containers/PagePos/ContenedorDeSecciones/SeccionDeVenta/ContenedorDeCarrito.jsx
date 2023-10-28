import { Col } from "react-bootstrap";
import { productoReducerContext } from "@/context//Contextos";
import { lazy, useContext } from "react";
import Ticket from "@/components//Ticket/Ticket";

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
                style={{ marginLeft: "15px",minWidth : "300px"}}
                className="d-none  overflow-hidden d-md-block shadow  h-100   p-0"
                xs={3}>

                <Ticket />

            </Col>
        </>
    );
};


export default ContenedorDeCarrito