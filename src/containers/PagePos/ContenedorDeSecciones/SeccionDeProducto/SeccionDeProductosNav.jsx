import { Col } from "react-bootstrap";
import DropwDownItemsProductos from "./DropwDownFilterProductos";
import BuscadorInput from "@/components//BuscadorInput";
import { memo } from "react";
import { RemoveFilterIcon } from "@/components//Icons/RemoveFilterIcon";
import { DropDownDeTarifas } from "@/components//DropDowns/DropDownDeTarifas";
import CarritoDeComprasIndicador from "@/components//Icons/CarritoDeComprasIndicador";


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

            <Col className="d-flex justify-content-evenly pt-1 p-md-0 p-0 align-items-center">
                <DropwDownItemsProductos />

                <RemoveFilterIcon />

            </Col>

            <Col className="d-flex align-items-center justify-content-center p-0 mt-3 mt-md-0">
                <CarritoDeComprasIndicador />
            </Col>


            <Col
                xs={12}
                md={"auto"}
                className="p-0  d-flex justify-content-center justify-content-md-end align-items-center">
                <BuscadorInput texto={"productos"} />
            </Col>

        </>
    );
})

export default SeccionDeProductosNav