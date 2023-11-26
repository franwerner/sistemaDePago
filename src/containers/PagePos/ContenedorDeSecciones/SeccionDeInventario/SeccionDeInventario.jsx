import { Row } from "react-bootstrap";
import { SeccionDeInvenarioNav } from "./SeccionDeInvenarioNav";
import { SeccionDeInventarioBody } from "./SeccionDeInventarioBody";

const SeccionDeInventario = () => {
    return (
        <>
            <Row style={{ minHeight: "fit-content" }}
                className="m-0 shadow d-flex p-md-3 align-items-center  justify-content-between">
                <SeccionDeInvenarioNav />
            </Row>
            <Row className="m-0 h-100 overflow-hidden">
                <SeccionDeInventarioBody />
            </Row>
        </>
    );
};


export default SeccionDeInventario