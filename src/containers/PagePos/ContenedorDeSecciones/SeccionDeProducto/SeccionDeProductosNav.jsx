import { Col } from "react-bootstrap";
import DropwDownItemsProductos from "./DropwDownFilterProductos";
import BuscadorInput from "@/components//BuscadorInput";
import { memo } from "react";
import { DropDownDeTarifas } from "@/components//DropDowns/DropDownDeTarifas";
import CarritoDeComprasIndicador from "@/components//Icons/CarritoDeComprasIndicador";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDetalleDefault/DropDownOrdenDefault";


const dropwDownList = [
    { nombre: ["Precio"], prioridad: 1 },
    { nombre: ["Lote"], prioridad: 2 },
]

const SeccionDeProductosNav = memo(() => {

    return (
        <>
            <Col
                xs="12"
                md="5"
                lg="4"
                xxl="3"
                className="d-flex p-md-0 align-items-center ">
                <DropDownDeTarifas />
            </Col>

            <Col xs = "auto" className="d-flex align-items-center flex-fill justify-content-between mx-0 mx-md-2 p-0 mt-3 mt-md-0">
                <DropwDownItemsProductos />

                <DropDownOrdenDefault dropwDownList={dropwDownList} />

                <CarritoDeComprasIndicador />
            </Col>


            <Col
                xs={12}
                md={"auto"}
                className="p-0 flex-fill d-flex justify-content-center justify-content-md-end align-items-center">
                <BuscadorInput texto={"productos"} />
            </Col>

        </>
    );
})

export default SeccionDeProductosNav