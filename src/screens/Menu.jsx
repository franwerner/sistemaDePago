import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEventoMostrar } from "@/hooks/useEventoMostrar";
import styles from "@/styles/Menu.module.css"
import { memo } from "react";

const cards = [
    {
        tipo: "Sucursales",
        src: "https://i.ibb.co/3SzxDLb/png-transparent-store-branches-illustration-removebg-preview.png",
        color: "#ff785d",
        link: "/sucursales"
    },
    {
        tipo: "Punto de venta",
        src: "https://i.ibb.co/PwvyCyf/png-transparent-computer-icons-cashier-cash-register-icon-s-cashier-miscellaneous-angle-material-rem.png",
        color: "#66cce0",
        link: "/empleado"
    },
]

const CardBody = memo(({ src, tipo, color }) => {
    return <Card.Body
        style={{ borderTop: `8px solid ${color}` }}
        className="d-flex rounded    justify-content-center flex-column">
        <Card.Img
            alt={tipo}
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
    const { mostrar, alternarMostrar } = useEventoMostrar();

    return (
        <Link style={{ textDecoration: "none" }} to={link}>
            <Card
                onMouseEnter={alternarMostrar}
                onMouseLeave={alternarMostrar}
                onTouchStart={alternarMostrar}
                onTouchEnd={alternarMostrar}
                className={`${styles.cardSeleccion} animate__animated animate__bounceInDown m-2 ${mostrar ? styles.enterAnimation : styles.leaveAnimation}`}
            >
                <CardBody
                    src={src}
                    color={color}
                    tipo={tipo}
                />
            </Card>
        </Link>
    );

}



const Menu = () => {
    return (
        <Container className="scrollHidden p-0 d-flex a justify-content-center flex-column align-items-center vh-100" fluid>

            <Row className="w-100 h-100 p-0 d-flex justify-content-center align-items-center m-0">

                <Col className=" p-0 mt-2 mt-md-0  d-flex justify-content-center  flex-wrap ">

                    {
                        cards.map((props, index) =>

                            <CardSeleccionDeNavegacion
                                key={index}
                                {...props}
                            />

                        )
                    }

                </Col>
            </Row>

        </Container>
    );
};


export default Menu
