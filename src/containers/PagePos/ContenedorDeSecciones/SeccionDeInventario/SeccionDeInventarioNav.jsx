import BuscadorInput from "@/components//BuscadorInput";
import DropDownFilterDefault from "@/components//DropDowns/DropDownFilterDefault";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault";
import { RemoveFilterIcon } from "@/components//Icons/RemoveFilterIcon";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const dropwDownOrden = [
    { nombre: ["Vencimiento"], prioridad: 0 },
    { nombre: ["Fabricacion"], prioridad: 1 },
    { nombre: ["Numero"], prioridad: 2 },
    { nombre: ["Ingreso"], prioridad: 3 },
    { nombre: ["Items"], prioridad: 4 },

]

const dropwDownFilter = [
    { nombre: "Vencidos" },
    { nombre: "Sin productos" }
]

export const SeccionDeInventarioNav = () => {
    return (
        <>
            <Col
                xs="auto"
                className="p-0 d-flex m-1 align-items-center">

                <QueryParamsProvider>
                    <DropDownOrdenDefault dropwDownList={dropwDownOrden} />
                </QueryParamsProvider>
            </Col>

            <Col
                className="d-flex p-0 align-items-center justify-content-between"
                xs="auto"
                md="1">
                <DropDownFilterDefault dropwDownList={dropwDownFilter} />
                <RemoveFilterIcon />
            </Col>

            <Col
                xs={{ order: "3" }}
                xl={{ order: "0", span: "5" }}
                className="p-0 py-1 px-2 ">
                <BuscadorInput texto="numero de lote" />
            </Col>

            <Col
                xs="12"
                md="auto"
                 className="p-0 d-flex justify-content-start  ">
                <Link to="añadir" className="w-100 px-5 px-md-0">
                    <Button
                        variant="outline-ligthdark"
                        type="button"
                        className="fs-6  w-100 zoom  py-2 mt-2 mt-lg-0 px-4 fw-medium "
                        aria-labelledby="agregar contenedor">
                        Añadir lote
                        <i className="fa-solid mx-md-2 fa-truck-ramp-box fa-flip-horizontal"></i>
                    </Button>
                </Link>
            </Col>
        </>
    );
};