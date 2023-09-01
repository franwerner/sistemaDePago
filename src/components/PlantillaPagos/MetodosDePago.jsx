import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { TarifaContex, restoDelPagoContext } from "../../context/Contextos";
import { useRestanteFinal } from "../../hooks/useRestanteFinal";
import { calcularPorcentaje } from "../../helper/calcularPorcentaje";


const comprobarTarifaActual = (tarifa, tarifaActual) => {

    if (tarifa.tipoDePago == tarifaActual.tipoDePago) return tarifa.tarifa

    else return (tarifa.tarifa - tarifaActual.tarifa)

}


const ListaDeMetodosDePagos = React.memo(({ tarifa, agregarResto, listadoFinal, restaFinal, eliminarResto, resto, tarifaActual }) => {



    const onClick = () => {

        console.log(restaFinal)

        if (restaFinal.calculoResta <= 0 || resto > 0) return;

        const porcentaje = comprobarTarifaActual(tarifa, tarifaActual)

        const resultado = calcularPorcentaje(restaFinal.calculoResta, porcentaje)

      

        agregarResto({ ...tarifa, resto: resultado, porcentaje: resultado })

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

    const { listadoDeTarifas, tarifa } = useContext(TarifaContex)

    const { agregarResto, restoDelPago, eliminarResto } = useContext(restoDelPagoContext)

    const { restaFinal, listadoFinal } = useRestanteFinal()



    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>

                <Container fluid id="metodos-de-pagos" >

                    {listadoDeTarifas.map(t => {

                        const buscar = restoDelPago.find(i => i.tipoDePago === t.tipoDePago)

                        const resto = buscar ? buscar.resto : 0

                        return (

                            <ListaDeMetodosDePagos
                                key={t.tipoDePago}
                                agregarResto={agregarResto}
                                tarifaActual={tarifa}
                                restaFinal={restaFinal}
                                listadoFinal={listadoFinal}
                                tarifa={t}
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