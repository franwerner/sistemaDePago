import { Row } from "react-bootstrap";

export const SeccionNavDefault = ({ children , classAdd = ""}) => {

    return (
        <Row className={`${classAdd} m-0 align-items-center shadow p-1 border-bottom p-md-3 d-flex justify-content-between`}>
            {children}
        </Row>
    );
};