import { Col, Row } from "react-bootstrap"
import styles from "../../styles/PlantillaCobro.module.css"

export const CarritoDeProductoVacio = () => {

    console.log(styles)
    return (
        <>
            <Row className={`d-flex justify-content-center align-items-center ${styles.contenedorSinProductos}`}>
                <Col className="d-flex justify-content-center position-relative ">
                    <i className={`fa-solid fa-cart-shopping ${styles.carrito}`}></i>
                    <p className={` text-center fs-5 fw-bolder ${styles.textoCarrito}`}>No hay productos selecionados</p>
                </Col>

            </Row>
        </>
    )
}