import React from "react";
import styles from "@/styles/PosLogin.module.css"
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ButtonIngresar = React.memo(() => {
    return (
        <Col className="w-100 m-0 p-0">
            <Link to={"/pos"}>
                <Button className={`${styles.botonIngresar}  border-light fw-bolder p-3 w-100`}>
                    Ingresar
                </Button>
            </Link>
        </Col>
    );
});