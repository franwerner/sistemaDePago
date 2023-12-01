import { Col } from "react-bootstrap";
import { productoReducerContext } from "@/context//Contextos";
import { Suspense, memo, useContext } from "react";
import TablaDeVentas from "./TablaDeVentas/TablaDeVentas";
import Ticket from "./Ticket/Ticket";
import SvgCarritoVacio from "@/components//Svg/SvgCarritoVacio";
import { Link } from "react-router-dom";

const ContenedorCarrito = () => {
    return (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <Link className="zoom" to={"/pos/productos"}>
                <SvgCarritoVacio />
            </Link>
            <p className="m-0  text-wrap fs-5 text-ligthdark fw-semibold text-center">No hay productos seleccionados.</p>
        </div>
    )
}

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
                        <ContenedorCarrito />
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