import { Col } from "react-bootstrap";
import BuscadorInput from "@/components//BuscadorInput";
import { lazy, memo } from "react";
import { DropDownDeTarifas } from "@/components//DropDowns/DropDownDeTarifas";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDetalleDefault/DropDownOrdenDefault";
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault";
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading";
import { BotonSeccionNav } from "@/components//Botones/BotonSeccionNav";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";

const ModalDeSecciones = lazy(() => import("./ModalDeSecciones"))

const dropwDownList = [
    { nombre: "Precio", prioridad: 1 },
    { nombre: "Lote", prioridad: 2 },
]

const dropwDownList2 = [
    { nombre: "Mas vendidos" },
    { nombre: "Favoritos" },
]

const BotonSecciones = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <Col xs="auto" className="d-flex p-0">
            <SuspenseCompontentsLoading>
                {
                    mostrar &&
                    <ModalDeSecciones
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar} />
                }
            </SuspenseCompontentsLoading>

            <BotonSeccionNav onClick={alternarMostrar}>
                <i className="fa-solid mx-1 fa-layer-group"></i>
                <span className="d-none d-sm-inline"> Secciones</span>
            </BotonSeccionNav>
        </Col>
    )
}

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

            <Col xs="auto" className="d-flex align-items-center flex-fill justify-content-around mx-0 mx-md-2 p-0 mt-3 mt-md-0">
                <DropDownFilterDefault dropwDownList={dropwDownList2} />

                <DropDownOrdenDefault dropwDownList={dropwDownList} />

                <BotonSecciones />

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