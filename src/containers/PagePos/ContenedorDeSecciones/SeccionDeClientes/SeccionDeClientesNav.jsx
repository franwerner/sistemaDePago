import BuscadorInput from "@/components//BuscadorInput";
import DropDownFilterDefault from "@/components//DropDowns/DropDownFilterDefault";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault";
import { Col } from "react-bootstrap";

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
            <Col>
                <DropDownOrdenDefault dropwDownList={ordenList} />
            </Col>
            <Col>
                <DropDownFilterDefault dropwDownList={filtradoList} />
            </Col>
            <Col
                className="pt-2"
                xs="12"
                md="6">
                <BuscadorInput texto="por dni"/>
            </Col>
        </>
    );
};