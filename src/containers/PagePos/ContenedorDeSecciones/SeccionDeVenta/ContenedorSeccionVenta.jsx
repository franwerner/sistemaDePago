import { Col } from "react-bootstrap";
import { productoReducerContext } from "@/context//Contextos";
import React, { lazy, useContext } from "react";
import Ticket from "@/containers//PagePos/ContenedorDeSecciones/SeccionDeVenta/Ticket/Ticket";


const CarritoDeProductoVacio = lazy(() => import("@/components//CarritoDeProductoVacio"))
const TablaDeVentas = lazy(() => import("./TablaDeVentas/TablaDeVentas"))





const ContenedorSeccionVenta = React.memo(({ mostrar }) => {

    const { listaProducto } = useContext(productoReducerContext)

    const contenedorStats = {
        marginLeft: mostrar ? "0px" : "15px",
        display: mostrar ? "d-flex" : "d-none",
        display2: mostrar ? "d-none" : "d-block"
    }

    return (
        <>

            <Col className={`${contenedorStats.display2} m-0 p-0 shadow h-100  scrollBarPersonalizada `}>
                {
                    listaProducto.length == 0 ?
                        <CarritoDeProductoVacio /> :
                        <TablaDeVentas />
                }

            </Col>

            <Col
                style={{ marginLeft: `${contenedorStats.marginLeft}`, minWidth: "330px" }}
                className={`${contenedorStats.display}  justify-content-center d-md-flex overflow-hidden  shadow   p-0`}
                xs={3}>

                <Ticket />

            </Col>
        </>
    );
})


export default ContenedorSeccionVenta