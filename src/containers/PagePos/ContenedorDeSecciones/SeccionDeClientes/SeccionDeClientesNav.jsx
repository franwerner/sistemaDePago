import BuscadorInput from "@/components//BuscadorInput";
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDetalleDefault/DropDownOrdenDefault";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { Col } from "react-bootstrap";
import { lazy } from "react";
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading";
import { BotonSeccionNav } from "@/components//Botones/BotonSeccionNav";

const FormularioModalDeAñadir = lazy(() => import("./FormularioModalDeAñadir"))

const ordenList = [
    { nombre: "Ingreso", prioridad: 3 },
    { nombre: "Compras", prioridad: 1 },
    { nombre: "Devoluciones", prioridad: 2 }
]

const filtradoList = [
    { nombre: "Nuevos" }
]

const ButtonAñadirCliente = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <Col
            xs="12"
            md="auto"
            className="p-0 mt-1 mt-md-0 d-flex justify-content-start  ">
            <SuspenseCompontentsLoading>
                {
                    mostrar && <FormularioModalDeAñadir
                        mostrar={mostrar}
                        alternarMostrar={alternarMostrar} />
                }
            </SuspenseCompontentsLoading>

            <BotonSeccionNav onClick={alternarMostrar}>
                Añadir cliente
                <i className="fa-solid mx-1 fa-user-plus"></i>
            </BotonSeccionNav>

        </Col>
    )
}


export const SeccionDeClientesNav = () => {
    return (
        <>
            <Col
                xs="auto"
                className="d-flex justify-content-center align-items-center">
                <DropDownOrdenDefault dropwDownList={ordenList} />
            </Col>
            <Col
                className="d-flex justify-content-center align-items-center"
                xs="auto">
                <DropDownFilterDefault dropwDownList={filtradoList} />
            </Col>
            <Col
                className="pt-2"
                xs={{ order: "3" }}
                xl={{ order: "0", span: "5" }}>
                <BuscadorInput texto="por dni" />
            </Col>

            <ButtonAñadirCliente />
        </>
    );
};