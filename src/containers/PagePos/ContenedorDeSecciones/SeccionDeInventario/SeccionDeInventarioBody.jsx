import { Card, Col } from "react-bootstrap";
import styles from "@/styles/SeccionDeInventario.module.css"
import { useFocusMouseElements } from "@/hooks//useFocusMouseElements";
import SvgContenedor from "@/components//Svg/SvgContenedor";
import { lazy, memo } from "react";
import { useNavigate } from "react-router-dom";
import { DropDownDetalle } from "@/components//DropDowns/DropDownDetalle";

const ContenedorVacio = lazy(() => import("@/components//ContenedorVacio"))
const SvgBarCode = lazy(() => import("@/components//Svg/SvgBarCode"))

const CardBody = memo(() => {

    const randomNumber = Math.round(Math.random(1) * 600) //cantidad de productos

    const cajas = Math.floor(randomNumber / 100)

    return (
        <Card.Body
            className=" d-flex  p-0  position-relative  justify-content-center h-100">
            {
                Array.from({ length: cajas < 1 ? 1 : cajas }).map((item, index) =>
                    <SvgContenedor key={index} total={index + 1} />
                )
            }

            <div style={{ bottom: "0%" }} className="position-absolute d-flex justify-content-between w-100 px-2">
                <span className=" fw-semibold text-ligthdark ls-4">Lote #{Math.round(Math.random(1) * 500) + 1}</span>
                <span className=" fw-semibold text-ligthdark ls-4">{randomNumber} Items</span>
            </div>
        </Card.Body>

    )
})

export const ContenedorCard = memo(() => {

    const { onMouseEnter, refFocusElement } = useFocusMouseElements()

    const navigate = useNavigate()

    const onClick = (e) => {
        if (e.target.tagName !== "I" && e.target.id !== "dropdown") navigate("gestion")
    }

    const DatosTest = [
        { tipo: "Ing.", data: "3/12/2023" },
        { tipo: "Vto.", data: "1/12/2024" },
    ]

    return (
        <Card
            onClick={onClick}
            tabIndex={0}
            ref={refFocusElement}
            id={styles.containerCard}
            onMouseEnter={onMouseEnter}
            className="m-2 card-move-up  border-0 shadow position-relative  cursor-pointer overflow-hidden">

            <Card.Title className="d-flex z-1  px-2 position-absolute w-100 justify-content-between">
                <DropDownDetalle itemList={DatosTest} />
            </Card.Title>

            <CardBody />

        </Card >
    );
})

export const SeccionDeInventarioBody = () => {

    const lotes = [1]

    return (
        <Col
            id={styles.inventarioBody}
            className="d-flex justify-content-center align-content-start flex-wrap">

            {
                lotes.length > 0 ? Array.from({ length: 20 }).map((item, index) =>
                    <ContenedorCard key={index} />
                )
                :
                <ContenedorVacio texto={"No se encontro ningun lote"}>
                    <SvgBarCode/>
                </ContenedorVacio>
             }



        </Col>

    );
};