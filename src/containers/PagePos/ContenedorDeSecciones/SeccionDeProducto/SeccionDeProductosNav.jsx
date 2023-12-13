import { Col } from "react-bootstrap";
import BuscadorInput from "@/components//BuscadorInput";
import { lazy, memo } from "react";
import { DropDownDeTarifas } from "@/components//DropDowns/DropDownDeTarifas";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault";
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault";
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { BotonSeccionNavText } from "@/components//Botones/BotonSeccionNavText";
import { SeccionNavCol } from "@/components//SeccionNavCol";

const ModalDeSecciones = lazy(() => import("./ModalDeSecciones"))

const dropwDownList = [
    { nombre: "Precio", prioridad: 1 },
    { nombre: "Cantidad", prioridad: 2 },
]

const dropwDownList2 = [
    { nombre: "Mas vendidos" },
    { nombre: "Favoritos" },
    { nombre: "Sin items" }
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

            <BotonSeccionNavText
                text={"Secciones"}
                onClick={alternarMostrar}>
                <i className="fa-solid mx-1 fa-layer-group"></i>
            </BotonSeccionNavText>
        </Col>
    )
}

const list = [
    { component: <DropDownDeTarifas responsive={true} /> },
    { component: <DropDownOrdenDefault dropwDownList={dropwDownList} /> },
    { component: <DropDownFilterDefault dropwDownList={dropwDownList2} /> },
    { component: <BotonSecciones /> },
    { component: <BuscadorInput texto={"producto"} />, props: { xs: 12, xl: "auto", className: "" } },
]

const SeccionDeProductosNav = memo(() => {

    return (
        <SeccionNavCol list={list} />
    );
})

export default SeccionDeProductosNav