import { Col } from "react-bootstrap";
import { productoReducerContext } from "@/context//Contextos";
import { Suspense, memo, useContext } from "react";
import CarritoDeProductoVacio from "@/components//CarritoDeProductoVacio";
import TablaDeVentas from "./TablaDeVentas/TablaDeVentas";
import Ticket from "./Ticket/Ticket";


const SeccionDeVentaBody = memo(({ mostrar }) => {

    const { listaProducto } = useContext(productoReducerContext)

    const contenedorStats = {
        marginLeft: mostrar ? "0px" : "15px",
        display: mostrar ? "d-flex" : "d-none",
        display2: mostrar ? "d-none" : "d-block"
    }
    return (
        <>
            <Col className={`${contenedorStats.display2} m-0 p-0 shadow h-100  scrollBarPersonalizada `}>

                <Suspense fallback={<div>Loading...</div>}>
                    {listaProducto.length === 0 ?
                        <CarritoDeProductoVacio />
                        :
                        <TablaDeVentas />
                    }
                </Suspense>
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


export default SeccionDeVentaBody