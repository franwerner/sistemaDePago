import { AgregarCerosANumeros } from "@/common//helper/AgregarCerosANumeros";
import { BotonSeccionNav } from "@/components//Botones/BotonSeccionNav";
import BuscadorInput from "@/components//BuscadorInput";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDetalleDefault/DropDownOrdenDefault";
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault";
import { Col } from "react-bootstrap";

const orden = [
    { nombre: "Nombre", prioridad: 4 },
    { nombre: "Vencimiento", prioridad: 3 },
    { nombre: "Fabricacion", prioridad: 2 },
    { nombre: "Cantidad", prioridad: 1 }
]
const filtro = [
    { nombre: "Vencidos" },
    { nombre: "Sin stock" }
]

export const SeccionDeInventarioGestionNav = () => {
    return (
        <>
            <Col xs="auto">
                <h2 className="m-0 border-bottom border-2 text-ligthdark ls-4 fs-3 mx-2">#{AgregarCerosANumeros({digitos : 3,numero : 45})}</h2>
            </Col>

            <Col xs = "auto">
                <BotonSeccionNav>
                     Informacion
                    <i className="fa-solid te mx-1 fa-circle-info"></i>
                </BotonSeccionNav>
            </Col>

            <Col xs="auto" className="d-flex  justify-content-between">
                <DropDownOrdenDefault dropwDownList={orden} />
            </Col>

            <Col xs="auto" >
                <DropDownFilterDefault dropwDownList={filtro} />
            </Col>

            <Col xs="12" md="5">
                <BuscadorInput texto="producto" />
            </Col>
        </>
    );
};