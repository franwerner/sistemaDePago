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
                    className={`${styles.botonFinDeSession} bg-hoverdark border-0  rounded-2 `}>
                    Fin de la session
                </Button>
            </Col>


        </>
    );
};