import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { Col } from "react-bootstrap";
import { lazy, useContext } from "react";
import { InventarioAddContext } from "@/context//Contextos";
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading";
import { BotonSeccionNav } from "@/components//Botones/BotonSeccionNav";
import { BotonSeccionNavText } from "@/components//Botones/BotonSeccionNavText";
import { SeccionNavCol } from "@/components//SeccionNavCol";
const ModalDeAgregarProducto = lazy(() => import("./ModalDeAgregarProducto"))

const dropwDownList = [
    { nombre: "Nombre", prioridad: 4 },
    { nombre: "Cantidad", prioridad: 1 },
    { nombre: "Fabricacion", prioridad: 2 },
    { nombre: "Vencimiento", prioridad: 3 },
]

const BotonAgregar = () => {
    const { alternarMostrar, mostrar } = useEventoMostrar()

    const { agregarProducto } = useContext(InventarioAddContext)


    return (
        <Col xs="auto"
            className="p-0 d-flex">
            <SuspenseCompontentsLoading>
                {
                    mostrar &&

                    <ModalDeAgregarProducto
                        agregarProducto={agregarProducto}
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar} />
                }
            </SuspenseCompontentsLoading>
            <BotonSeccionNavText
                text="Agregar"
                onClick={alternarMostrar}>
                <i className="fa-solid mx-1 fa-circle-plus"></i>
            </BotonSeccionNavText>

        </Col>
    )
}

const NumeroDeLote = () => (
    <h2 className="m-0 border-bottom border-2 text-ligthdark ls-4 fs-3 mx-2">#405</h2>
)

const listado = [
    { component: <NumeroDeLote /> },
    { component: <DropDownOrdenDefault dropwDownList={dropwDownList} /> },
    { component: <BotonAgregar /> },
]

export const SeccionDeInventarioAgregarNav = () => {
    return (
            <SeccionNavCol list={listado} />
    );
};