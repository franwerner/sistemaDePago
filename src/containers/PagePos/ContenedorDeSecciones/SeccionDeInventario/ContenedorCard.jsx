import { useFocusMouseElements } from "@/hooks//useFocusMouseElements";
import { Card, Dropdown, Spinner } from "react-bootstrap";
import styles from "@/styles/SeccionDeInventario.module.css"
import SvgContenedor from "@/components//SvgContenedor";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";

const DropwDownDeLote = ({ }) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>

            <Dropdown drop="down-centered" style={{ right: "0%" }} className="position-absolute">
                <Dropdown.Toggle variant="none" className="position-relative border-0" id="dropdown-basic">
                    <i onClick={alternarMostrar} className="fa-solid bg-white text-ligthdark position-absolute py-1 px-2 fs-3 fa-ellipsis-vertical"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.ItemText >Action</Dropdown.ItemText>
                    <Dropdown.ItemText >Action</Dropdown.ItemText>
                    <Dropdown.ItemText >Action</Dropdown.ItemText>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}


export const ContenedorCard = () => {

    const navigate = useNavigate()

    const randomNumber = useMemo(() => Math.round(Math.random(0) * 3) + 1, [])

    const [animation, setAnimation] = useState(false)

    const temblor = animation ? "temblor" : ""

    const { onMouseEnter, refFocusElement } = useFocusMouseElements()

    const establecerAnimacion = () => {
        setAnimation(true)
        // const c = setTimeout(() => {
        //     navigate("/pos")
        // }, 7000);

    }

    return (
        <Card
            tabIndex={0}
            ref={refFocusElement}
            id={styles.containerCard}
            onMouseEnter={onMouseEnter}
            className={`${styles[temblor]} m-2  border-0 shadow  cursor-pointer overflow-hidden`}>

            <Card.Title className="d-flex  px-2 position-absolute w-100 justify-content-between">
                <div className="d-flex justify-content-between p-2  w-100">
                    <p style={{ fontSize: "20px" }} className="m-0 text-uppercase text-ligthdark mx-2  fw-semibold fs-6 ls-3 p-1 border-bottom  ">Ingreso</p>
                    <p className="m-0 fw-normal p-1 rounded-0 text-ligthdark mx-2  fw-semibold fs-6 border-bottom ls-4 "> 17/07/2024 </p>
                </div>
                <DropwDownDeLote />
            </Card.Title>

            <Card.Body
                onClick={establecerAnimacion}
                className=" d-flex  p-0   justify-content-center h-100">
                <SvgContenedor
                    animation={animation}
                    numero={randomNumber}
                    lote={randomNumber} />
            </Card.Body>

        </Card >
    );
};

