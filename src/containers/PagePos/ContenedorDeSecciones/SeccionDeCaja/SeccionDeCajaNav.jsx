import { Button, Col } from "react-bootstrap";

export const SeccionDeCajaNav = () => {
    return (
        <>
            <Col
                style={{ color: "#555" }}
                className="d-flex fs-5 fw-medium align-items-center">
                POS/08456
            </Col>
            <Col className="d-flex fs-5 align-items-center justify-content-end">
                <Button
                    className="border-0 p-2 fs-5"
                    style={{ background: "#746AF4" }}>
                    Fin de session
                </Button>
            </Col>
        </>
    );
};