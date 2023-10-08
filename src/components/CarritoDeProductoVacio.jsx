import { Col, Row } from "react-bootstrap"
import styles from "@/styles/CarritoProductoVacio.module.css"

export const CarritoDeProductoVacio = () => {

    return (
            <Row className={`d-flex justify-content-center align-items-center h-100 `}>
                <Col className="d-flex justify-content-center position-relative ">
                    <i className={`fa-solid fa-cart-shopping ${styles.carrito}`}></i>
                    <p className={` text-center fs-5 fw-bolder ${styles.textoCarrito} position-absolute`}>No hay productos selecionados</p>
                </Col>
            </Row>
    )
}