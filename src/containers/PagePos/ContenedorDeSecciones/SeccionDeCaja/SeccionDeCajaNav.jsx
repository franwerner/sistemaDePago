import { Button, Col } from "react-bootstrap";

export const SeccionDeCajaNav = () => {
    return (
        <>
            <Col
                className="d-flex   fw-medium align-items-center">
                <p className="m-0 text-ligthdark fs-5">POS / 08456</p>
            </Col>


            <Col className="d-flex align-items-center justify-content-end">
                <Button
                    variant="outline-ligthdark"
                    className="fw-semibold ls- fs-6">
                    Fin de la session
                </Button>
            </Col>


        </>
    );
};