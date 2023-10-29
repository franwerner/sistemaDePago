import { useContext, useEffect, useRef } from "react"
import { restoDelPagoContext } from "../context/Contextos"
import { Col, Container, FloatingLabel, Form, Stack } from "react-bootstrap"
import React from "react"
import { useForm } from "../hooks/useForm"

const RestoForm = React.memo(({ resto, modificarResto, id }) => {

    const { form, changeForm } = useForm({ resto })


    const ref = useRef()

    const valiarResto = isNaN(form.resto) ? 0 : form.resto

    useEffect(() => {
        console.dir(ref.current.focus())
        if (form.resto == resto) return

        modificarResto({ resto: valiarResto, id })

    }, [form.resto])



    return (
   
        <Form.Control
            onChange={changeForm}
            value={valiarResto}
            ref={ref}
            name="resto"
            className="w-50 shadow-sm border-0 border-bottom rounded-2"
            type="number"
            style={{ background: "#ffffff", boxShadow: "" }}
            placeholder=" " />
    )
})


const ListaDeMetodosDePagosAgregados = ({ resto, nombre, modificarResto, eliminarResto, id }) => {

    const onClick = () => {
        eliminarResto({ id })
    }

    return (
        <Stack
            style={{ background: "#f1f1f1" }}
            direction="horizontal"
            className="d-flex shadow-sm aling-items-center justify-content-between border p-3 p-xxl-4 mx-4 my-1 my-md-2">
            <p className="m-0">{nombre}</p>
            <RestoForm
                resto={resto}
                id={id}
                modificarResto={modificarResto} />
            <i onClick={onClick} className="fa-regular fs-5 fa-circle-xmark"></i>
        </Stack>
    )
}

export const MetodosDePagosAgregados = () => {

    const { pagoActual, modificarResto, eliminarResto } = useContext(restoDelPagoContext)


    return (

        <Container fluid className="p-0">
            {pagoActual.metodosDePago.map(item =>

                <ListaDeMetodosDePagosAgregados
                    modificarResto={modificarResto}
                    eliminarResto={eliminarResto}
                    key={item.id}
                    id={item.id}
                    resto={item.resto}
                    nombre={item.nombre} />
            )}
        </Container>
    )
}