import { TarifaContex, restoDelPagoContext } from "@/context//Contextos"
import { useRestanteTotal } from "@/hooks//useRestanteTotal"
import styles from "@/styles/ListaDeMetodosDePagos.module.css"
import React, { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import shortid from "shortid"



const MetodosDePagos = React.memo(({ nombre, restoTotal, agregarResto }) => {

    const onClick = () => {

        agregarResto(
            {
                nombre,
                "resto": restoTotal
                , id: shortid.generate()
            }
        )
    }


    return (
        <Row onClick={onClick} className={`${styles.metodoDePago} d-flex justify-content-center p-4 mt-1`}>
            <p className=" align-items-center  my-0">
                {nombre}
            </p>
        </Row>
    )
})


export const ListaDeMetodosDePagos = () => {

    const { agregarResto } = useContext(restoDelPagoContext)

    const { tarifaActual } = useContext(TarifaContex)

    const { metodosDePago } = tarifaActual

    const { restoTotal } = useRestanteTotal()



    return (
        <>
            <Container
                fluid
                id="metodos-de-pagos">

                {
                    metodosDePago.map(metodo =>
                        <MetodosDePagos
                            agregarResto={agregarResto}
                            restoTotal={restoTotal}
                            key={metodo.id}
                            nombre={metodo.nombre}
                        />
                    )
                }
            </Container>
        </>
    )
}
