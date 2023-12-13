import { BotonSeccionNav } from "@/components//Botones/BotonSeccionNav";
import {  Col } from "react-bootstrap";

export const SeccionDeCajaNav = () => {
    return (
        <>
            <Col
                className="d-flex   fw-medium align-items-center">
                <p className="m-0 text-ligthdark fs-5 border-bottom">POS / 08456</p>
            </Col>


            <Col xs="auto" className="d-flex align-items-center justify-content-end">
                <BotonSeccionNav>
                    Fin de la session
                </BotonSeccionNav>
            </Col>


        </>
    );
};