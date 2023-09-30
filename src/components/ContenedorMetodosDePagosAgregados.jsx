import { Col, Container, Dropdown, Row } from "react-bootstrap";
import styles from "@/styles/ContenedorMetodosDePagosAgregados.module.css"
import React, { useContext } from "react";
import { restoDelPagoContext } from "@/context/Contextos";
import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales";
import { MetodosDePagosVacios } from "./MetodosDePagosVacios";

const DropwDownDeTarifas = ({resto}) => {

  return (
    <Dropdown>

    <Dropdown.Toggle variant="none">
        {separarNumerosConDecimales(resto)}
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item>
            Test
        </Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
  )

}

export const PagoAgregado = React.memo(({ metodo, eliminarResto, background, seleccionarElemento }) => {

    const { nombre, resto } = metodo

    const onClickRemove = () => {
        eliminarResto(metodo)
    }

    const onClickSeleccion = (e) => {

        if (e.target.tagName == "I") return

        seleccionarElemento(metodo)


    }




    return (
        <>
            <Row onClick={onClickSeleccion}
                className={` mt-1 border p-4 ${styles[background]} ${styles.metodoAgregado}`}>

                <Col className=" text-center  ">
                    <p className="my-1">
                        {nombre}
                    </p>
                </Col>

                <Col className="fw-bolder w-100 my-0  ">

                    <DropwDownDeTarifas resto = {resto} />



                </Col>
                <Col className="text-center">

                    <i onClick={onClickRemove}
                        className={`${styles.circleXMark} fa-solid my-1 fs-4 fa-circle-xmark`}>
                    </i>
                </Col>
            </Row>

        </>
    )
})

const ListaDePagosAgregados = React.memo(({ eliminarResto, ultimoSeleccionado, metodosDePago, seleccionarElemento }) => {

    return (
        <>
            {metodosDePago.map(metodo => {
                const background = ultimoSeleccionado.id == metodo.id ? "metodoAgregadoSeleccionado" : ""

                return (
                    <PagoAgregado
                        key={metodo.id}
                        eliminarResto={eliminarResto}
                        background={background}
                        seleccionarElemento={seleccionarElemento}
                        metodo={metodo}
                    />
                )
            }

            )}

        </>
    )
})


export const ContenedorMetodosDePagosAgregados = () => {

    const { eliminarResto, pagoActual, seleccionarElemento } = useContext(restoDelPagoContext)

    const { metodosDePago, ultimoSeleccionado } = pagoActual

    return (
        <Container
            fluid>
            {
                metodosDePago.length == 0 ?
                    <MetodosDePagosVacios />
                    :
                    <ListaDePagosAgregados
                        eliminarResto={eliminarResto}
                        metodosDePago={metodosDePago}
                        ultimoSeleccionado={ultimoSeleccionado}
                        seleccionarElemento={seleccionarElemento}
                    />
            }


        </Container>

    )
}

