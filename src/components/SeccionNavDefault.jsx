import { Row } from "react-bootstrap";

export const SeccionNavDefault = ({ children , classAdd = ""}) => {

    return (
        <Row style={{minHeight : "75px"}} className={`${classAdd} position-relative m-0 align-items-center shadow p-1 border-bottom p-2 p-md-3 d-flex justify-content-between`}>
            {children}
        </Row>
    );
};