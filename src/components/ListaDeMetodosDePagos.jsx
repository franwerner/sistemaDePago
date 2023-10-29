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
                , id: shortid.generate(),
            }
        )
    }


    return (
        <div onClick={onClick} className={`${styles.metodoDePago} d-flex shadow-sm justify-content-start p-4 mx-4 my-1 my-md-2`}>
            <p className=" align-items-center m-0 my-0">
                {nombre}
            </p>
        </div>
    )
})


export const ListaDeMetodosDePagos = () => {

    const { agregarResto } = useContext(restoDelPagoContext)

    const { tarifaActual } = useContext(TarifaContex)

    const { metodosDePago } = tarifaActual

    const { restoTotal } = useRestanteTotal()

    return (

        <Container
            fluid
            className="p-0"
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

    )
}
