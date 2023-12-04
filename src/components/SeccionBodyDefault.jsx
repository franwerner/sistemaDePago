import { Row } from "react-bootstrap";

export const SeccionBodyDefault = ({ children, clasesAdd = "", referido = null }) => {
    return (
        <Row
            ref={referido}
            className={`${clasesAdd} scrollBarPersonalizada h-100 p-0 m-0 `}>
            {children}
        </Row>
    );
};