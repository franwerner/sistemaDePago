import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import { useContext } from "react";
import { TarifaContex } from "../../context/Contextos";


const ListaDeMetodosDePagos = ({ tarifa }) => {


    return (
        <>
            <Row className={`${styles.metodo} mt-1 border border`}>
                <p className="my-0  p-4  ">
                    {tarifa.tipoDePago}
                </p>
            </Row>
        </>
    )

}

export const MetodosDePago = () => {

    // const { listadoDeTarifas } = useContext(TarifaContex)

    const listadoDeTarifas = [
        {
            "tipoDePago": "Efectivo",
            "tarifa": 0
        },
        {
            "tipoDePago": "Tajeta",
            "tarifa": 15
        },
        {
            "tipoDePago": "Dolar",
            "tarifa": 30
        },
        {
            "tipoDePago": "Dolar2",
            "tarifa": 30
        },
        {
            "tipoDePago": "Dolar4",
            "tarifa": 30
        },
        {
            "tipoDePago": "Dolar3",
            "tarifa": 30
        },
        {
            "tipoDePago": "Dolar6",
            "tarifa": 30
        },
        {
            "tipoDePago": "Dolar5",
            "tarifa": 30
        },
        {
            "tipoDePago": "Dolar23",
            "tarifa": 30
        },
        {
            "tipoDePago": "Dolar434",
            "tarifa": 30
        },

        {
            "tipoDePago": "Dolar544",
            "tarifa": 30
        },
        {
            "tipoDePago": "Dolar123",
            "tarifa": 30
        },
    ]

    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>
                <Container fluid >
                    {listadoDeTarifas.map(tarifa =>
                        <ListaDeMetodosDePagos key={tarifa.tipoDePago} tarifa={tarifa}></ListaDeMetodosDePagos>
                    )}

                </Container>
            </Col>
        </>
    );
};