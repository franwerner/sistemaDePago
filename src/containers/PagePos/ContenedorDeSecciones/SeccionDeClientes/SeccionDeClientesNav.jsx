import BuscadorInput from "@/components//BuscadorInput";
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { Col } from "react-bootstrap";
import { lazy } from "react";
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading";
import { BotonSeccionNav } from "@/components//Botones/BotonSeccionNav";
import { SeccionNavCol } from "@/components//SeccionNavCol";
import { BuscadorResponsivo } from "@/components//BuscadorResponsivo";
import { BotonSeccionNavText } from "@/components//Botones/BotonSeccionNavText";

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
            xs="auto"
            className="p-0 mt-1 mt-md-0 d-flex justify-content-start  ">
            <SuspenseCompontentsLoading>
                {
                    mostrar && <FormularioModalDeAñadir
                        mostrar={mostrar}
                        alternarMostrar={alternarMostrar} />
                }
            </SuspenseCompontentsLoading>

            <BotonSeccionNavText
                text="Añadir cliente"
                size="xl"
                onClick={alternarMostrar}>
                <i className="fa-solid mx-1 fa-user-plus"></i>
            </BotonSeccionNavText>
        </Col>
    )
}

const list = [
    { component: <DropDownOrdenDefault size="xl" dropwDownList={ordenList} /> },
    { component: <DropDownFilterDefault size="xl" dropwDownList={filtradoList} /> },
    { component: <ButtonAñadirCliente /> },
]


export const SeccionDeClientesNav = () => {
    return (
        <>
            <SeccionNavCol list={list}>
                <BuscadorResponsivo texto="por dni" />
            </SeccionNavCol>
        </>
    );
};