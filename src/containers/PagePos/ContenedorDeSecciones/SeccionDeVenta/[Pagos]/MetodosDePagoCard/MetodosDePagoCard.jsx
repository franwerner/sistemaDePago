import styles from "@/styles/MetodosDePagoCard.module.css"
import { memo, useRef } from "react"
import { Card } from "react-bootstrap"
import { RestoForm } from "./RestoForm"
import { CardTitulo } from "./CardTitulo"
import { CardVisual } from "./CardVisual"
import { CardFooter } from "./CardFooter"

const MetodosDePagosCard = ({ tipo, nombre, modificarResto, id, resto, eliminarResto }) => {

    const pagosCardRef = useRef(null)
    const cardRef = useRef(null)

    const onMouseEvents = () => {
        cardRef.current.focus()
        pagosCardRef.current.focusInput()
    }

    const onMouseLeave = () => {
        if (!pagosCardRef.current) return
        pagosCardRef.current.blurInput()
    }

    const obj = { id, nombre, tipo }

    const activo = !isNaN(resto) ? "cardActiva" : ""

    return (
        <Card
            ref={cardRef}
            tabIndex={0}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEvents}
            className={`${styles.cardContainer} ${styles[activo]} card-move-up m-4 shadow overflow-hidden`}>

            <CardTitulo
                obj={obj}
                resto={resto}
                modificarResto={modificarResto}
            />

            <Card.Body className=" p-0 m-0 d-flex flex-column justify-content-center  h-100 align-items-center ">

                <CardVisual
                    tipo={tipo}
                    nombre={nombre} />

                <RestoForm
                    obj={obj}
                    ref={pagosCardRef}
                    resto={resto}
                    modificarResto={modificarResto} />
            </Card.Body>

            <CardFooter
                obj={obj}
                eliminarResto={eliminarResto}
            />


        </Card >
    )

}

export default memo(MetodosDePagosCard)