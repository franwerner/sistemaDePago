import React, { useContext, } from "react";
import { ContenedorDeBotonesTactiles } from "@/components//ContenedorDeBotonesTactiles";
import { restoDelPagoContext } from "@/context/Contextos"
import { Col } from "react-bootstrap";
import styles from "@/styles/ContenedorDePagos.module.css"

export const BotonTacil = () => {

    const { modificarResto } = useContext(restoDelPagoContext)

    return (
        <Col className=" d-flex align-items-center justify-content-center h-100">
            <span className={`d-none d-md-block ${styles.contendorDeBotonesTactiles}`}>
                <ContenedorDeBotonesTactiles
                    modificadorDefault={modificarResto} />

            </span>
        </Col>
    )
}









