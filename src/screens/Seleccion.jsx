import { Col, Container, Row } from "react-bootstrap";
import CardSeleccionDeNavegacion from "@/components/CardSeleccionDeNavegacion";

const cards = [
    {
        tipo: "Sucursales",
        src: "https://i.ibb.co/3SzxDLb/png-transparent-store-branches-illustration-removebg-preview.png",
        color: "#ff785d",
        link: "/sucursales"
    },
    {
        tipo: "Empleados",
        src: "https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png",
        color: "#555",
        link: "/empleado"
    },
    {
        tipo: "Punto de venta",
        src: "https://i.ibb.co/PwvyCyf/png-transparent-computer-icons-cashier-cash-register-icon-s-cashier-miscellaneous-angle-material-rem.png",
        color: "#66cce0",
        link: "/pos"
    },
    {
        tipo: "Config. de Caja",
        src: "https://i.ibb.co/Jt5zLMy/png-transparent-point-of-sale-computer-icons-sales-computer-software-others-service-payment-logo-Pho.png",
        color: "#fce04e",
        link: "/pos/config"
    },
]


const Seleccion = () => {
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


export default Seleccion
