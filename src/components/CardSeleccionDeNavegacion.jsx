import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEventoMostrar } from "@/hooks/useEventoMostrar";
import styles from "@/styles/CardSeleccionDeNavegacion.module.css"
import React, { useRef, } from "react";


const CardBody = React.memo(({ src, tipo, color }) => {
    return <Card.Body
        style={{ borderTop: `8px solid ${color}` }}
        className="d-flex rounded justify-content-center flex-column">
        <Card.Img
            width={160}
            height={160}
            srcSet={src}
            loading="lazy"
            decoding="async"
            src={src} />
        <Card.Title className="fw-bolder text-center">
            <p>{tipo}</p>
        </Card.Title>

    </Card.Body>

})

const CardSeleccionDeNavegacion = ({ src, tipo, color, link }) => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <Link
            style={{ textDecoration: "none" }}
            to={link}>
            <Card
                onMouseEnter={alternarMostrar}
                onMouseLeave={alternarMostrar}
                onTouchStart={alternarMostrar}
                onTouchEnd={alternarMostrar}
                className={`${styles.cardSeleccion} m-2 ${mostrar ? styles.enterAnimation : styles.leaveAnimation}`}>

                <CardBody
                    src={src}
                    color={color}
                    tipo={tipo} />
            </Card>
        </Link>
    );

}

export default CardSeleccionDeNavegacion