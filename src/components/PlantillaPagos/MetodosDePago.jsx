import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { TarifaContex } from "../../context/Contextos";


const ListaDeMetodosDePagos = ({ tarifa }) => {


    return (
        <>
            <Row tabIndex={1} className={`${styles.metodo} mt-1 border border`}>
                <p className="my-0  p-4  ">
                    {tarifa.tipoDePago}
                </p>
            </Row>
        </>
    )

}

export const MetodosDePago = React.memo(() => {

    const { listadoDeTarifas} = useContext(TarifaContex)


    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>
                <Container fluid id = "metodos-de-pagos" >
                    {listadoDeTarifas.map(tarifa =>
                        <ListaDeMetodosDePagos key={tarifa.tipoDePago} tarifa={tarifa}></ListaDeMetodosDePagos>
                    )}

                </Container>
            </Col>
        </>
    );
});