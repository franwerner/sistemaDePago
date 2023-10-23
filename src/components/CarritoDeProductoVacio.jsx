import { Col, Row } from "react-bootstrap"
import styles from "@/styles/CarritoProductoVacio.module.css"

const CarritoDeProductoVacio = () => {
    return (
            <Row className={`h-100 `}>
                <Col className="d-flex flex-column aling-items-center justify-content-center h-100 ">
                    <i className={`fa-solid text-center  fa-cart-shopping ${styles.carrito}`}></i>
                    <p className={` text-center fs-5 fw-bolder ${styles.textoCarrito} `}>No hay productos selecionados</p>
                </Col>
            </Row>
    )
}

export default CarritoDeProductoVacio