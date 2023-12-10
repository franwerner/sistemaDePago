import { Button, Col } from "react-bootstrap";
import styles from "@/styles/SeccionDeCaja.module.css"

export const SeccionDeCajaNav = () => {
    return (
        <>
            <Col
                style={{ color: "#555" }}
                className="d-flex  fw-medium align-items-center">
                <p className="m-0 fs-5">POS / 08456</p>
            </Col>

            <Col className="d-flex fs-5 align-items-center justify-content-end">
                <Button
                    variant="outline-primary-2"
                    className={` fw-semibold  rounded-2 `}>
                    Fin de la session
                </Button>
            </Col>


        </>
    );
};