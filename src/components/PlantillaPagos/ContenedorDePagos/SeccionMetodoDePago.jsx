import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { TarifaContex, restoDelPagoContext } from "@/context/Contextos";
import { useRestanteFinal } from "@/hooks/useRestanteFinal";

import { useCombinarMetodosDePago } from "@/hooks/useCombinarMetodosDePago";

const ListaDeMetodosDePago = React.memo(({ nombre, resto = 0, restosTotales }) => {

    const { agregarResto, eliminarResto } = useContext(restoDelPagoContext)

    const { tarifaActual } = useContext(TarifaContex)

    const { tipoDeTarifa } = tarifaActual

    const metodosDePago = [
        {
            nombre,
            "resto": restosTotales,
        }
    ]

    const onClick = () => {

        if (resto > 0 || restosTotales == 0) return

        agregarResto({
            tipoDeTarifa,
            metodosDePago,
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
                    {resto}
                </Col>

                <Col>
                    <Button onClick={remover}>X</Button>
                </Col>
            </Row>

        </>
    )

})


export const SeccionMetodoDePago = React.memo(() => {

    const { combinarMetodoDePago } = useCombinarMetodosDePago()

    const { restosTotales } = useRestanteFinal()

    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>

                <Container fluid id="metodos-de-pagos" >

                    {combinarMetodoDePago.map((metodo) => {
                        return (

                            <ListaDeMetodosDePago
                                key={metodo.id}
                                nombre={metodo.nombre}
                                resto={metodo.resto}
                                restosTotales={restosTotales}
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