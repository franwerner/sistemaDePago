import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault";
import { Col } from "react-bootstrap";


const dropwDownList = [
    { nombre: ["Monto"], prioridad: 1 },
    { nombre: ["Hora","fecha"], prioridad: 3 },
    { nombre: ["Orden"], prioridad: 2 },
]

export const SeccionDeCajaPagosNav = () => {

    return (
        <>
            <Col xs="auto">
                <DropDownOrdenDefault dropwDownList={dropwDownList} />
            </Col>
        </>
    )

}