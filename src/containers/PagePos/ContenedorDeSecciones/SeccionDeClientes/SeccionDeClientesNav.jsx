import BuscadorInput from "@/components//BuscadorInput";
import DropDownFilterDefault from "@/components//DropDowns/DropDownFilterDefault";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault";
import { Button, Col } from "react-bootstrap";

const ordenList = [
    { nombre: ["Ingreso"], prioridad: 3 },
    { nombre: ["Compras"], prioridad: 1 },
    { nombre: ["Devoluciones"], prioridad: 2 }
]

const filtradoList = [
    { nombre: "Nuevos" }
]


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

            <Col
                xs="12"
                md="auto"
                className="p-0 d-flex justify-content-start  ">
                <Button //Esto activa un modal
                    variant="outline-ligthdark"
                    type="button"
                    className="fs-6 zoom w-100 mt-1 m-md-0 fw-medium ">
                    Añadir cliente
                    <i className="fa-solid mx-1 fa-user-plus"></i>
                </Button>
            </Col>
        </>
    );
};