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
import { BuscadorResponsivo } from "@/components//BuscadorResponsivo";

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
        <Col
            xs="auto"
            className="d-flex p-0">
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
                size="xl"
                onClick={alternarMostrar}>
                <i className="fa-solid mx-1 fa-layer-group"></i>
            </BotonSeccionNavText>
        </Col>
    )
}

const list = [
    { component: <DropDownOrdenDefault size="xl" dropwDownList={dropwDownList} /> },
    { component: <DropDownFilterDefault size="xl" dropwDownList={dropwDownList2} /> },
    { component: <DropDownDeTarifas size="xl" responsive={true} /> },
    { component: <BotonSecciones /> },
]

const SeccionDeProductosNav = memo(() => {

    return (
        <SeccionNavCol list={list} >
            <BuscadorResponsivo texto={"productos"} />
        </SeccionNavCol>
    );
})

export default SeccionDeProductosNav