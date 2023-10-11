import { BotonPagos } from "@/components//BotonPagos";
import { BotonProductoYRevision } from "@/components//BotonProductoYRevision";
import { ContenedorDeBotonesTactiles } from "@/components//ContenedorDeBotonesTactiles";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaPagos.module.css"
import { useContext } from "react";
import { productoReducerContext } from "@/context//Contextos";

const ButtonTaciles = () => {

    const listaDeBotonesTactiles = [
        ["1", "2", "3", ["+2", "+2"]],
        ["4", "5", "6", ["+5", "+5"]],
        ["7", "8", "9", ["+10", "+10"]],
        ["+/-", "0", [",", "Comma"], ["X", "Backspace"]]
    ]

    const { modificarProducto, ultimoSeleccionado } = useContext(productoReducerContext)

    return (
        <Col className={`${styles.contenedorBotonesTactiales} d-flex justify-content-center  align-items-center  p-0 `}>
            <ContenedorDeBotonesTactiles
                numeroDefault={ultimoSeleccionado.cantidadSeleccionada}
                modificadorDefault={modificarProducto}
                arrayButtons={listaDeBotonesTactiles} />
        </Col>
    )
}


export const PlantillaPagosBody = ({ alternarMostrarContenedor, alternarMostrar }) => {
    return (
        <Container
            fluid
            className="scrollHidden d-flex flex-column h-100 rounded-1  ">

            <Row className="flex-grow-1 d-flex ">

                <Col sm={4} className="d-none  d-md-block ">

                    <Row className="h-100 align-items-center text-center">
                        <div
                            className={` ${styles.botonPagos}`}
                            onClick={alternarMostrarContenedor}>
                            <i className="fa-solid fa-circle-arrow-right "></i>
                            <p className="fw-bolder">Pagos</p>
                        </div>
                    </Row>

                </Col>

                <ButtonTaciles />

            </Row>


            <Row className="d-md-none d-flex flex-grow-0  ">
                <BotonPagos
                    alternarMostrarContenedor={alternarMostrarContenedor} />
                <BotonProductoYRevision
                    alternarMostrar={alternarMostrar}
                    mostrar={false} />
            </Row>

        </Container>

    );
}
