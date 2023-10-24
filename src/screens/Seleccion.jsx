import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Seleccion.module.css"
import { Link } from "react-router-dom";

const cards = [
    {
        tipo: "Sucursales",
        link: "https://i.ibb.co/3SzxDLb/png-transparent-store-branches-illustration-removebg-preview.png",
    },

    {
        tipo: "Sucursales",
        link: "https://i.ibb.co/3SzxDLb/png-transparent-store-branches-illustration-removebg-preview.png",
    },
    {
        tipo: "Sucursales",
        link: "https://i.ibb.co/3SzxDLb/png-transparent-store-branches-illustration-removebg-preview.png",
    },
    {
        tipo: "Sucursales",
        link: "https://i.ibb.co/3SzxDLb/png-transparent-store-branches-illustration-removebg-preview.png",
    },
]

const CardSeleccion = ({ link, tipo }) => {

    return (
        <Card className={`${styles.cardSeleccion} mx-2`} style={{ width: '18rem' }}>

            <Card.Body style={{ borderTop: "8px solid red" }} className={`d-flex  rounded justify-content-center flex-column`}>
                <Card.Img variant="top" src={link} />
                <Card.Title className="fw-bolder text-center" style={{ color: "#555" }}>{tipo}</Card.Title>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <Link to={"/empleado"}>
                    ir
                </Link>
            </Card.Body>
        </Card>
    )
}

const Seleccion = () => {
    return (
        <Container className=" p-0 d-flex justify-content-center flex-column align-items-center vh-100" fluid>

            <Row>
                Selecciona una seccion
            </Row>

            <Row className="h-100 w-100 p-0 d-flex justify-content-center align-items-center m-0">

                <Col className=" p-0  d-flex justify-content-center  flex-wrap ">

                    {
                        cards.map(({ link, tipo }) =>

                            <CardSeleccion
                                key={tipo}
                                tipo={tipo}
                                link={link} />

                        )
                    }

                </Col>
            </Row>

        </Container>
    );
};


export default Seleccion

{/* <img width={120} height={120} src="https://i.ibb.co/3SzxDLb/png-transparent-store-branches-illustration-removebg-preview.png"></img> */ }