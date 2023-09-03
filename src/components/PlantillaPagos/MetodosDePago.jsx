import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { TarifaContex, restoDelPagoContext } from "../../context/Contextos";
import { useRestanteFinal } from "../../hooks/useRestanteFinal";
import { useCalculadoraPorcenje } from "../../hooks/useCalcularPorcentaje";

const ListaDeMetodosDePago = React.memo(({ nombre, agregarResto, tarifaActual, restaFinal, resto = 0, eliminarResto }) => {


    const { calculoResta } = restaFinal

    const { tipoDeTarifa } = tarifaActual

    const porcentaje = useCalculadoraPorcenje(resto)

    const metodosDePago = [
        {
            nombre,
            "resto": calculoResta + resto
        }
    ]

    const onClick = () => {


        if (calculoResta == 0 || resto > 0) return

        agregarResto({
            tipoDeTarifa,
            metodosDePago
        })
    }

    const remover = () => {


        eliminarResto({
            tipoDeTarifa,
            metodosDePago
        })

    }

    return (
        <>
            <Row tabIndex={1} className={`${styles.metodo} mt-1  border border`}>
                <Col onClick={onClick} xs={4} className="border border-danger ">
                    {nombre}
                </Col>
                <Col>
                    {porcentaje + resto}
                </Col>

                <Col>
                    <Button onClick={remover}>X</Button>
                </Col>
            </Row>

        </>
    )

})


export const MetodosDePago = React.memo(() => {

    const { tarifaActual } = useContext(TarifaContex)

    const { metodosDePago } = tarifaActual

    const { agregarResto, restoDelPago, eliminarResto } = useContext(restoDelPagoContext)

    const { restaFinal } = useRestanteFinal()

    // const buscarMetodosDePagoDeLaTarifa = restoDelPago.find(r => r.tipoDeTarifa == tarifaActual.tipoDeTarifa)



    const combinados =

        metodosDePago.map(itemA => {

            if (restoDelPago.length == 0) return itemA

            const agregado = restoDelPago[0].metodosDePago.find(itemB => itemB.nombre == itemA.nombre)

            return agregado ? Object.assign({}, itemA, agregado) : itemA

        }
        )

    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>

                <Container fluid id="metodos-de-pagos" >

                    {combinados.map((metodo) => {



                        return (

                            <ListaDeMetodosDePago
                                key={metodo.id}
                                agregarResto={agregarResto}
                                nombre={metodo.nombre}
                                tarifaActual={tarifaActual}
                                restaFinal={restaFinal}
                                resto={metodo.resto}
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