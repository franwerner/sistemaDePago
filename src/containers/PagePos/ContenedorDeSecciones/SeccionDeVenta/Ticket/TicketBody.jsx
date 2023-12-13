import { DropDownDeTarifas } from "@/components//DropDowns/DropDownDeTarifas"
import { Col } from "react-bootstrap"

export const TicketBody = () => {

    return (
        <Col className="h-100  d-flex justify-content-center align-items-center ">
            <DropDownDeTarifas/>
        </Col>
    )

}