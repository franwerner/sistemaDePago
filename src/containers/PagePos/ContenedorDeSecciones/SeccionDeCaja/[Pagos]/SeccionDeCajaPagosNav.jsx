import DropDownOrdenDefault from "@/components//DropDownOrdenDefault";
import { Paginacion } from "@/components//Paginacion";
import { Col, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PaginacionPagos = () => {

    const { id } = useParams()

    return <Paginacion url={"pos/caja/pagos"} largo={15} parametro={id} />
}

export const SeccionDeCajaPagosNav = () => {

    return (
        <>
            <Col  xs="auto">
                <DropDownOrdenDefault>
                    <Dropdown.Item>
                        Cantidad
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Metodo
                    </Dropdown.Item>
                </DropDownOrdenDefault>
            </Col>
            <Col xs="auto">
                <PaginacionPagos />
            </Col>

        </>
    )

}