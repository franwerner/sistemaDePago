import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import React, {  useContext, useState } from "react";
import { TarifaContex, restoDelPagoContext } from "../../context/Contextos";




const ListaDeMetodosDePagos = React.memo(({ tarifa,establecerRestante,restante}) => {

    const onClick  = ( ) =>{
        establecerRestante(restante)
    }

    return (
        <>
            <Row onClick={onClick} tabIndex={1} className={`${styles.metodo} mt-1 border border`}>
                <Col className="my-0 border   ">
                    {tarifa.tipoDePago}
                </Col>
                <Col>
                {restante.restante}
                </Col>
             
            </Row>
        </>
    )

})


const RestoDelPago = React.memo(({restante}) =>{
    

  
    return(
        <>
        <p>{restante.restante == -1 ? restante.total : restante.restante}</p>
        </>
    )
})

export const MetodosDePago = React.memo(() => {

    const { listadoDeTarifas, tarifa } = useContext(TarifaContex)

    const { restante, establecerRestante} = useContext(restoDelPagoContext)


    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>
                <Container fluid id="metodos-de-pagos" >
                  {listadoDeTarifas.map(t => 
                    <ListaDeMetodosDePagos key={t.tipoDePago} restante = {restante.total} establecerRestante = {establecerRestante} tarifa = {t}></ListaDeMetodosDePagos>
                    )}
                </Container>
                <RestoDelPago restante = {restante}></RestoDelPago>
            </Col>


    
        </>
    );
});