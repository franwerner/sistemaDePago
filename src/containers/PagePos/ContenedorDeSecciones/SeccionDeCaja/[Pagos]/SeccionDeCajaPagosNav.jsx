import DropDownOrdenDefault from "@/components//DropDownOrdenDefault";
import { useSearchQuery } from "@/hooks//useSearchQuery";
import { Col, Dropdown } from "react-bootstrap";


const dropwDownList = [
    { nombre: "Cantidad", orden: "<" },
    { nombre: "Monto ↑", orden: ">" },
    { nombre: "Monto ↓", orden: "<" },
    { nombre: "Hora", orden: "<" },
    { nombre: "Orden", orden: "<" },

]

const DropwDownItems = ({ nombre, orden, onClick }) => {
    return (
        <Dropdown.Item
            data-name={nombre}
            data-orden={orden}
            onClick={onClick}>
            {nombre}
        </Dropdown.Item>
    )
}

const DropdownDefaultPagos = () => {
    const { agregarParametros, removerParametro } = useSearchQuery()
    return (
        <DropDownOrdenDefault>
            {
                dropwDownList.map(item =>
                    <DropwDownItems
                        onClick={agregarParametros}
                        key={item.nombre}
                        nombre={item.nombre}
                        orden={item.orden} />
                )
            }
        </DropDownOrdenDefault>
    )
}

export const SeccionDeCajaPagosNav = () => {

    return (
        <>
            <Col xs="auto">
                <DropdownDefaultPagos />
            </Col>
        </>
    )

}