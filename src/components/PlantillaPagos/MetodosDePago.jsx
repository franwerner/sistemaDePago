import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { TarifaContex, restoDelPagoContext } from "../../context/Contextos";
import { useRestanteFinal } from "../../hooks/useRestanteFinal";


const ListaDeMetodosDePagos = React.memo(({ tarifa, agregarResto, restaFinal, eliminarResto, resto }) => {

    const { tipoDePago, porcentaje } = tarifa

    const { calculoResta } = restaFinal

    const calcularPorcentaje = (resto) * (porcentaje / 100)

    const onClick = () => {

        if (calculoResta == 0 || resto > 0) return

        agregarResto({
            tipoDePago,
            resto: calculoResta,
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
                    { }
                </Col>
                <Col>
                    Resto : {calcularPorcentaje + resto}
                </Col>
                <Col>
                    <i onClick={x} className="fa-solid fs-5 fa-circle-xmark"></i>
                </Col>
            </Row>
        </>
    )

})


const ListaDeMetodosDePago = React.memo(({ nombre, agregarResto, tarifaActual, restaFinal, buscador }) => {

    const { calculoResta } = restaFinal

    const { tipoDePago } = tarifaActual

    const onClick = () => {

        // if (calculoResta == 0) return

        agregarResto({
            tipoDePago,
            listaDeMetodos: [
                {
                    nombre,
                    "resto": calculoResta
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
                    {/* {resto} */}
                </Col>
            </Row>

        </>
    )

})

export const MetodosDePago = React.memo(() => {

    const { tarifaActual } = useContext(TarifaContex)

    const { tipoDePago, porcentaje, metodosDePago } = tarifaActual

    const { agregarResto, restoDelPago, eliminarResto } = useContext(restoDelPagoContext)

    const { restaFinal } = useRestanteFinal()


    const buscador = restoDelPago.find(r => r.tipoDePago == tarifaActual.tipoDePago)


    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>

                <Container fluid id="metodos-de-pagos" >

                    {
                        metodosDePago.map(metodo =>
                            <ListaDeMetodosDePago
                                key={metodo.id}
                                agregarResto={agregarResto}
                                nombre={metodo.nombre}
                                tarifaActual={tarifaActual}
                                restaFinal={restaFinal}
                                buscador={buscador}
                            >

                            </ListaDeMetodosDePago>

                        )
                    }
                </Container>
            </Col>

        </>
    );
});