import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { TarifaContex, restoDelPagoContext } from "../../context/Contextos";
import { useRestanteFinal } from "../../hooks/useRestanteFinal";
import { useCalculadoraPorcenje } from "../../hooks/useCalcularPorcentaje";


const verificarResto = (resto) => {

    return !resto ? 0 : resto.resto

}

const ListaDeMetodosDePago = React.memo(({ nombre, agregarResto, tarifaActual, restaFinal, resto, eliminarResto }) => {

    const { calculoResta } = restaFinal

    const { tipoDePago } = tarifaActual

    const porcentaje = useCalculadoraPorcenje(verificarResto(resto))

    const listaDeMetodos = [
        {
            nombre,
            "resto": calculoResta + verificarResto(resto)
        }
    ]

    const onClick = () => {


        if (calculoResta == 0 || verificarResto(resto) > 0) return

        agregarResto({
            tipoDeTarifa: tipoDePago,
            listaDeMetodos
        })
    }

    const remover = () => {


        eliminarResto({
            tipoDeTarifa: tipoDePago,
            listaDeMetodos
        })

    }

    return (
        <>
            <Row tabIndex={1} className={`${styles.metodo} mt-1  border border`}>
                <Col onClick={onClick} xs={4} className="border border-danger ">
                    {nombre}
                </Col>
                <Col>
                    {(porcentaje + verificarResto(resto)).toFixed(1)}
                </Col>

                <Col>
                    <Button onClick={remover}>X</Button>
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

    const { metodosDePago } = tarifaActual

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
                                eliminarResto={eliminarResto}
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