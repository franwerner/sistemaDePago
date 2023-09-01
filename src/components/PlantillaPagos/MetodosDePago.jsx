import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { TarifaContex, restoDelPagoContext } from "../../context/Contextos";
import { useRestanteFinal } from "../../hooks/useRestanteFinal";
import { calcularPorcentajeDelMetodoDePago } from "../../helper/calcularPorcentajeDelMetodoDePago";





const ListaDeMetodosDePagos = React.memo(({ tarifa, agregarResto, restaFinal, eliminarResto, resto }) => {

    const { porcentaje } = tarifa

    const { calculoResta } = restaFinal



    const onClick = () => {
        
        const resultado = calcularPorcentajeDelMetodoDePago(calculoResta, porcentaje)

        agregarResto({
            ...tarifa,
            resto: calculoResta,
            porcentaje: resultado
        })

    }

    const x = () => {
        if (resto <= 0) return
        eliminarResto({ ...tarifa })
    }

    return (
        <>
            <Row tabIndex={1} className={`${styles.metodo} mt-1  border border`}>
                <Col xs={4} onClick={onClick} className="my-0 border   ">
                    {tarifa.tipoDePago}
                </Col>
                <Col>
                    {resto}
                </Col>
                <Col>
                    <i onClick={x} className="fa-solid fs-5 fa-circle-xmark"></i>
                </Col>
            </Row>
        </>
    )

})



export const MetodosDePago = React.memo(() => {

    const { listadoDeTarifas } = useContext(TarifaContex)

    const { agregarResto, restoDelPago, eliminarResto } = useContext(restoDelPagoContext)

    const { restaFinal } = useRestanteFinal()


    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>

                <Container fluid id="metodos-de-pagos" >

                    {listadoDeTarifas.map(tarifa => {

                        const buscar = restoDelPago.find(pago => pago.tipoDePago === tarifa.tipoDePago)

                        const resto = buscar ? buscar.resto + buscar.porcentaje : 0

                        return (
                            <ListaDeMetodosDePagos
                                key={tarifa.tipoDePago}
                                agregarResto={agregarResto}
                                restaFinal={restaFinal}
                                tarifa={tarifa}
                                resto={resto}
                                eliminarResto={eliminarResto}
                            >
                            </ListaDeMetodosDePagos>
                        )
                    })}
                </Container>
            </Col>

        </>
    );
});