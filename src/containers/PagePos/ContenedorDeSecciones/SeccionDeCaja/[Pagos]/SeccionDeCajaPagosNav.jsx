import BuscadorInput from "@/components//BuscadorInput";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDetalleDefault/DropDownOrdenDefault";
import { Col } from "react-bootstrap";

const dropwDownList = [
    { nombre: ["Monto"], prioridad: 1 },
    { nombre: ["Hora", "fecha"], prioridad: 3 },
    { nombre: ["Orden"], prioridad: 2 },
]

export const SeccionDeCajaPagosNav = () => {

    return (
        <>
            <Col xs="auto" clas>
                <DropDownOrdenDefault dropwDownList={dropwDownList} />
            </Col>
            <Col 
            className="pt-1 pt-md-0"
            md = "8"
            xs = "12">
                <BuscadorInput texto="por nro de orden" />
            </Col>
        </>
    )

}