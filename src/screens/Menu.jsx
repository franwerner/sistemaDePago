import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEventoMostrar } from "@/hooks/useEventoMostrar";
import styles from "@/styles/Menu.module.css"
import { memo } from "react";
import SvgCashRegister from "../components/SvgCashRegister";
import { SvgSucursales } from "../components/SvgSucursales";

const cards = [
    {
        tipo: "Sucursales",
        Componente: () => <SvgSucursales />,
        link: "/sucursales"
    },
    {
        tipo: "Punto de venta",
        Componente: () => <SvgCashRegister />,
        link: "/empleado"
    },
];



const CardSeleccionDeNavegacion = ({ Componente, tipo, link }) => {
    const { mostrar, alternarMostrar } = useEventoMostrar();

    return (
        <Link className="shadow animate__animated animate__bounceInDown m-4 rounded" style={{ textDecoration: "none" }} to={link}>
            <Card
                onMouseEnter={alternarMostrar}
                onMouseLeave={alternarMostrar}
                onTouchStart={alternarMostrar}
                onTouchEnd={alternarMostrar}
                className={`${styles.cardSeleccion} h-100 shadow  border-0  ${mostrar ? styles.enterAnimation : styles.leaveAnimation}`}
            >
                <Card.Body className="h-100" >
                    <Componente />
                </Card.Body>


                <Card.Footer className="fw-bolder border-2 border-top  bg-white text-center">
                    <p className="m-0 ls-4 text-ligthdark">{tipo}</p>
                </Card.Footer>
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
