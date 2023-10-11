import { Col, Row } from "react-bootstrap"
import styles from "@/styles/CarritoProductoVacio.module.css"

export const CarritoDeProductoVacio = () => {
    return (
            <Row className={`d-flex  align-items-center h-100 `}>
                <Col className="text-center mb-5">
                    <i className={`fa-solid mb-2 fa-cart-shopping ${styles.carrito}`}></i>
                    <p className={` text-center fs-5 fw-bolder ${styles.textoCarrito} `}>No hay productos selecionados</p>
                </Col>
            </Row>
    )
}