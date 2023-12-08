import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDetalleDefault/DropDownOrdenDefault";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { Col } from "react-bootstrap";
import { lazy, useContext } from "react";
import { InventarioAddContext } from "@/context//Contextos";
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading";
import { BotonSeccionNav } from "@/components//Botones/BotonSeccionNav";
const ModalDeAgregarProducto = lazy(() => import("./ModalDeAgregarProducto"))

const dropwDownList = [
    { nombre: ["Nombre"], prioridad: 4 },
    { nombre: ["Cantidad"], prioridad: 1 },
    { nombre: ["Fabricacion"], prioridad: 2 },
    { nombre: ["Vencimiento"], prioridad: 3 },
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
            <BotonSeccionNav
                onClick={alternarMostrar}>
                Agregar
                <i className="fa-solid mx-1 fa-circle-plus"></i>
            </BotonSeccionNav>

        </Col>
    )
}

export const SeccionDeInventarioAgregarNav = () => {
    return (
        <>
            <Col xs="auto">
                <h2 className="m-0 border-bottom border-2 text-ligthdark ls-4 fs-3 mx-2">#405</h2>
            </Col>

                <Col xs="auto"
                    className="p-0">
                    <DropDownOrdenDefault dropwDownList={dropwDownList} />
                </Col>

            <BotonAgregar />
        </>
    );
};