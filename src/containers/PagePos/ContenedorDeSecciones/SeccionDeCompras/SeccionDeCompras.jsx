import { Row } from "react-bootstrap";
import SeccionDeComprasNav from "./SeccionDeComprasNav";
import SeccionDeComprasBody from "./SeccionDeComprasBody";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";

const SeccionDeCompras = () => {
    return (
        <QueryParamsProvider>
            <Row className="shadow m-0 p-2 p-md-3 d-flex justify-content-between" >
                <SeccionDeComprasNav />
            </Row>

            <Row className="m-0 overflow-hidden  justify-content-center  p-1 p-md-3 h-100">
                <SeccionDeComprasBody />
            </Row>
        </QueryParamsProvider>
    );
};


export default SeccionDeCompras