import DropDownOrdenDefault from "@/components//DropDownOrdenDefault";
import { Col, Dropdown } from "react-bootstrap";

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
        </>
    )

}