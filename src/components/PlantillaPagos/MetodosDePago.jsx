import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { TarifaContex, restoDelPagoContext } from "../../context/Contextos";
import { useRestanteFinal } from "../../hooks/useRestanteFinal";

const verificarResto = (resto) =>{

    return !resto ? 0 : resto.resto 
    
}

const ListaDeMetodosDePago = React.memo(({ nombre, agregarResto, tarifaActual, restaFinal, resto }) => {

    const { calculoResta } = restaFinal

    console.log(`Calculo resta : ${calculoResta}`)
   console.log(resto)

    const { tipoDePago } = tarifaActual

    const onClick = () => {
        if (calculoResta == 0) return

        agregarResto({
            tipoDeTarifa: tipoDePago,
            listaDeMetodos: [
                {
                    nombre,
                    "resto": calculoResta + verificarResto(resto)
                }
            ]

        })
    }

    return (
        <>
            <Row tabIndex={1} className={`${styles.metodo} mt-1  border border`}>
                <Col onClick={onClick} xs={6} className="border border-danger ">
                    {nombre}
                </Col>
                <Col>
                    {verificarResto(resto)}
                </Col>
            </Row>

        </>
    )

})

const ordenarListaDeMetodosDePago = (buscarMetodosDePagoDeLaTarifa, metodo) => {

    if (!buscarMetodosDePagoDeLaTarifa) return

    const buscador = buscarMetodosDePagoDeLaTarifa.listaDeMetodos.find(item => item.nombre == metodo.nombre)

    buscador ? { "resto ": buscador.resto } : undefined

    return buscador
}

export const MetodosDePago = React.memo(() => {

    const { tarifaActual } = useContext(TarifaContex)

    const { tipoDePago, porcentaje, metodosDePago } = tarifaActual

    const { agregarResto, restoDelPago, eliminarResto } = useContext(restoDelPagoContext)

    const { restaFinal } = useRestanteFinal()

    const buscarMetodosDePagoDeLaTarifa = restoDelPago.find(r => r.tipoDeTarifa == tarifaActual.tipoDePago)


    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>

                <Container fluid id="metodos-de-pagos" >

                    {metodosDePago.map((metodo) => {

                        const resto = ordenarListaDeMetodosDePago(buscarMetodosDePagoDeLaTarifa, metodo)

                        return (

                            <ListaDeMetodosDePago
                                key={metodo.id}
                                agregarResto={agregarResto}
                                nombre={metodo.nombre}
                                tarifaActual={tarifaActual}
                                restaFinal={restaFinal}
                                resto={resto}
                            >
                            </ListaDeMetodosDePago>

                        )
                    })
                    }
                </Container>
            </Col>

        </>
    );
});