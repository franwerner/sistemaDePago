import styles from "@/styles/MetodosDePagoCard.module.css"
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { Button, Card, Form } from "react-bootstrap"
import { useForm } from "../hooks/useForm"
import { useRestanteTotal } from "../hooks/useRestanteTotal"

const iconType = {
    "efectivo": "fa-solid fa-money-bill",
    "tarjeta": "fa-regular fa-credit-card",
    "qr": "fa-solid fa-qrcode",
    "transferencia": "fa-solid fa-building-columns",
    "otro": "fa-solid fa-globe"
}

const CardTitulo = React.memo(({ resto, id, nombre, modificarResto }) => {

    const restoTotal = useRestanteTotal()

    const onClick = () => {

        if (restoTotal > 0 || restoTotal < 0) {
            modificarResto({ resto: resto + restoTotal, id, nombre })
        }

    }

    return (
        <Card.Title
            className={`${styles.cardTitulo} position-absolute w-100 text-end`}>
            <Button
                className="border-0"
                variant="none"
                onClick={onClick}>
                <i className="fa-regular zoom fs-4 p-1 fa-square-plus"></i>
            </Button>
        </Card.Title>
    )

})
const CardBodyRestante = React.memo(({ tipo, nombre }) => {

    return (
        <>
            <div className={`${styles.iconContainer} ${styles[tipo]} d-flex justify-content-center align-items-center`}>
                <i className={`${iconType[tipo]} `}></i>
            </div>
            <p className="fw-semibold fs-5">{nombre}</p>

        </>
    )
})


const RestoForm = React.memo(forwardRef(({ modificarResto, id, nombre, resto = 0 }, ref) => {

    const { form, changeForm } = useForm({ resto })

    const inputRef = useRef(null)

    useImperativeHandle(ref, () => ({
        focusInput: () => inputRef.current.focus(),
        blurInput: () => inputRef.current.blur()
    }))

    useEffect(() => {

        const valiarResto = form.resto.length == 0 || isNaN(form.resto) ? "" : parseFloat(form.resto)

        modificarResto({ resto: valiarResto, id, nombre })

    }, [form.resto])

    return (
        <Form.Control
            ref={inputRef}
            tabIndex={1}
            onChange={changeForm}
            value={resto.length == 0 ? resto : Math.floor(resto * 100) / 100}
            name="resto"
            className={`${styles.formResto} w-50 text-center px-3 `}
            type="number"
            placeholder="" />
    )
}))



const CardFooter = React.memo(({ modificarResto, nombre, id }) => {

    const onClick = () => {
        modificarResto({ resto: 0, id, nombre })
    }

    return (
        <Card.Footer
            style={{ background: "none" }}
            className="d-flex justify-content-center">
            <Button
                onClick={onClick}
                type="reset"
                variant="none"
                className="border-0 p-0 zoom text-uppercase" >
                Restablecer
            </Button>
        </Card.Footer>
    )
})



const MetodosDePagosCard = ({ tipo, nombre, modificarResto, id, resto }) => {

    const pagosCardRef = useRef(null)

    const onMouseEvents = () => {
        pagosCardRef.current.focusInput()
    }

    const onMouseLeave = () => {
        pagosCardRef.current.blurInput()
    }

    return (
        <Card
            onMouseLeave={onMouseLeave}
            onClick={onMouseEvents}
            onMouseEnter={onMouseEvents}
            className={`${styles.cardContainer} shadow  overflow-hidden`}>

            <Card.Body className=" p-0 m-0 d-flex flex-column justify-content-center  h-100 align-items-center ">

                <CardTitulo
                    resto={resto}
                    id={id}
                    nombre={nombre}
                    modificarResto={modificarResto}
                />
                <CardBodyRestante
                    tipo={tipo}
                    nombre={nombre} />

                <RestoForm
                    ref={pagosCardRef}
                    id={id}
                    resto={resto}
                    nombre={nombre}
                    modificarResto={modificarResto} />
            </Card.Body>

            <CardFooter
                modificarResto={modificarResto}
                id={id}
                nombre={nombre} />
        </Card >
    )

}

export default React.memo(MetodosDePagosCard)