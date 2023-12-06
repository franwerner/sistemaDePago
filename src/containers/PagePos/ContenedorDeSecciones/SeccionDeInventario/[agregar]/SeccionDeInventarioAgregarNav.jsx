import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { Button, Col } from "react-bootstrap";
import { lazy, useContext } from "react";
import { InventarioAddContext } from "@/context//Contextos";
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
            className="p-0">
            <Button onClick={alternarMostrar}>
                Agregar
            </Button>

            <ModalDeAgregarProducto
                agregarProducto={agregarProducto}
                alternarMostrar={alternarMostrar}
                mostrar={mostrar} />
        </Col>
    )
}

export const SeccionDeInventarioAgregarNav = () => {
    return (
        <>
            <Col xs="auto">
                <h2 className="m-0 border-bottom border-2 text-ligthdark ls-4 fs-3 mx-2">#405</h2>
            </Col>
            <QueryParamsProvider>
                <Col xs="auto"
                    className="p-0">
                    <DropDownOrdenDefault dropwDownList={dropwDownList} />
                </Col>
            </QueryParamsProvider>

            <BotonAgregar />
        </>
    );
};