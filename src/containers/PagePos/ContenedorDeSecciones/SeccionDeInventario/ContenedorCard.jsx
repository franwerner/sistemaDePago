import { useFocusMouseElements } from "@/hooks//useFocusMouseElements";
import { Card } from "react-bootstrap";
import styles from "@/styles/SeccionDeInventario.module.css"
import SvgContenedor from "@/components//SvgContenedor";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";




export const ContenedorCard = () => {

    const navigate = useNavigate()

    const randomNumber = useMemo(() => Math.round(Math.random(0) * 3) + 1, [])

    const [animation, setAnimation] = useState(false)

    const temblor = animation ? "temblor" : ""

    const { onMouseEnter, refFocusElement } = useFocusMouseElements()

    const establecerAnimacion = () => {
        setAnimation(true)
        setTimeout(() => {
            navigate("/pos")
        }, 2000);
    }



    return (
        <Card
            tabIndex={0}
            ref={refFocusElement}
            id={styles.containerCard}
            onMouseEnter={onMouseEnter}
            className={`${styles[temblor]} m-2 border-0 shadow  cursor-pointer overflow-hidden`}>

            <Card.Title className="d-flex  position-absolute w-100 justify-content-between">
                <div className="d-flex justify-content-between p-2  w-100">
                    <p style={{ fontSize: "20px" }} className="m-0 text-uppercase text-ligthdark fw-semibold ls-3 p-1 border-bottom  ">Ingreso</p>
                    <p className="m-0 fw-normal p-1 rounded-0 text-ligthdark fw-semibold border-bottom ls-4 "> 17/07/2024 </p>
                </div>
            </Card.Title>

            <Card.Body
                onClick={establecerAnimacion}
                className=" d-flex p-0   justify-content-center h-100">

                <SvgContenedor
                    animation={animation}
                    numero={randomNumber}
                    lote={randomNumber} />

            </Card.Body>

        </Card >
    );
};