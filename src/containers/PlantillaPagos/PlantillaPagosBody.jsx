import { ContenedorDeBotonesTactiles } from "@/components//ContenedorDeBotonesTactiles";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaPagos.module.css"
import React, { useContext } from "react";
import { productoReducerContext } from "@/context//Contextos";

const listaDeBotonesTactiles = [
    ["1", "2", "3", "+2"],
    ["4", "5", "6", "+5"],
    ["7", "8", "9", "+10"],
    ["+/-", "0", [",", "Comma"], ["X", "Backspace"]]
]

const ButtonTaciles = React.memo(() => {

    const { modificarProducto } = useContext(productoReducerContext)

    return (
        <Col className={`${styles.contenedorBotonesTactiales} justify-content-center   px-5 w-100 d-flex  p-md-0 `}>
            <ContenedorDeBotonesTactiles
                modificadorDefault={modificarProducto}
                arrayButtons={listaDeBotonesTactiles} />
        </Col>
    )
})


export const PlantillaPagosBody = ({ alternarMostrarContenedor }) => {
    return (
        <Container
            fluid
            className=" p-0  rounded-1 h-100 d-flex w-100 overflow-hidden  flex-column  ">

            <Row className="d-flex p-0 m-0  flex-grow-0 my-2 mx-2 h-100">

                <Col className="d-none h-100 d-md-flex flex-column ">

                    <Row className={`${styles.textoConsumidorFinal}`}>

                        <div className="justify-content-evenly fw-semibold p-0 align-items-center d-flex" >

                            <div className="border border-white d-flex justify-content-center bg-white rounded-circle">
                                <i className="fa-solid fa-user-secret p-2 fs-4"></i>
                            </div>

                            <p className="m-0">Consumidor Final Anònimo</p>

                        </div>

                    </Row>

                    <Row className={`${styles.contenedorDeBotonpagos} h-100`} >
                        <div
                            className={`d-flex align-items-center flex-column justify-content-center ${styles.botonPagos}`}
                        >
                            <i onClick={alternarMostrarContenedor} className="fa-solid fa-circle-arrow-right "></i>
                            <p className="fw-bolder ">Pagos</p>
                        </div>

                    </Row>
                </Col>

                <ButtonTaciles />

            </Row>

        </Container>

    );
}
