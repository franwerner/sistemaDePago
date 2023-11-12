import DropDownOrdenDefault from "@/components//DropDownOrdenDefault";
import { useSearchQuery } from "@/hooks//useSearchQuery";
import { Col, Dropdown } from "react-bootstrap";


const dropwDownList = [
    { nombre: "Cantidad", valor: "cantidad" },
    { nombre: "Monto ↑", valor: "monto ↑" },
    { nombre: "Monto ↓", valor: "monto ↓" },
    { nombre: "Hora", valor: "hora" },

]

const DropwDownItems = ({ nombre, valor, onClick }) => {
    return (
        <Dropdown.Item
            data-name={valor}
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
                        valor={item.valor} />
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