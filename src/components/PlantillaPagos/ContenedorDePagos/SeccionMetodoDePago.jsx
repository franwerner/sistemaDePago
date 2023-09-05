import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { TarifaContex, restoDelPagoContext } from "@/context/Contextos";
import { useRestanteTotal } from "@/hooks//useRestanteTotal";
import { useBuscarMetodosDePago } from "@/hooks//useBuscarMetodosDePago";




const ListaDeMetodosDePagos = ({ nombre, restosTotales, agregarResto }) => {

    const { tarifaActual } = useContext(TarifaContex)

    const { tipoDeTarifa } = tarifaActual


    const pago =
    {
        nombre,
        "resto": restosTotales,
        id: "INITIAL_ID"
    }


    const onClick = () => {

        agregarResto({
            tipoDeTarifa,
            pago,
        })
    }


    return (
        <Row className={`${styles.metodo} mt-1 border`}>
            <Col onClick={onClick} className="border border-danger">
                {nombre}
            </Col>
        </Row>
    )
}


const Pagos = ({ nombre, resto, id, eliminarResto }) => {

    const { tarifaActual } = useContext(TarifaContex)

    const { tipoDeTarifa } = tarifaActual

    const pago =
    {
        nombre,
        id
    }

    const remove = () => {
        eliminarResto({
            tipoDeTarifa,
            pago
        })
    }

    return (
        <>
            <Row>
                <Col>
                    {nombre}
                </Col>
                <Col className="fw-bolder">
                    {resto}
                </Col>
                <Col>
                    <Button onClick={remove}>X</Button>
                </Col>
            </Row>

        </>
    )
}


const ListaDePagosAgreagos = ({ eliminarResto }) => {

    const  metodoEncontrado  = useBuscarMetodosDePago()
    
    return (
        <>

            {metodoEncontrado.metodosDePago.map(pago =>
                <Pagos key={pago.id} id={pago.id} nombre={pago.nombre} eliminarResto={eliminarResto} resto={pago.resto} />
            )}
        </>
    )
}

export const SeccionMetodoDePago = React.memo(() => {


    const { agregarResto, eliminarResto, listaDeRestos } = useContext(restoDelPagoContext)

    const { tarifaActual } = useContext(TarifaContex)

    const { metodosDePago } = tarifaActual

    const { restosTotales } = useRestanteTotal()

    return (
        <>
            <Col xs={4} className={`${styles.metodoDePago} p-3  h-100`}>

                <Container fluid id="metodos-de-pagos" >

                    <ListaDePagosAgreagos eliminarResto={eliminarResto} />


                    {
                        metodosDePago.map(metodo =>
                            <ListaDeMetodosDePagos agregarResto={agregarResto} restosTotales={restosTotales} key={metodo.id} nombre={metodo.nombre} />
                        )
                    }

                </Container>
            </Col>

        </>
    );
});



/*{combinarMetodoDePago.map((metodo) => {
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
}*/