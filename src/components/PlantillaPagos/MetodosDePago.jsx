import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import { useContext } from "react";
import { TarifaContex } from "../../context/Contextos";


const ListaDeMetodosDePagos = ({ tarifa }) => {


    return (
        <>
            <Row className={`${styles.metodoDePago} mt-1 border border`}>
                <p className="my-0  p-4  ">
                {tarifa.tipoDePago}
                </p>
            </Row>
        </>
    )

}

export const MetodosDePago = () => {

    const { listadoDeTarifas } = useContext(TarifaContex)

    return (
        <>
            <Col xs={5} className={`${styles.metodoDePago} py-2  border  border-primary h-100`}>
                <Container fluid>
                    {listadoDeTarifas.map(tarifa => 
                        <ListaDeMetodosDePagos key={tarifa.tipoDePago} tarifa={tarifa}></ListaDeMetodosDePagos>
                    )}

                </Container>
            </Col>
        </>
    );
};