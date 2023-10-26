import BuscadorInput from "@/components//BuscadorInput";
import { Button, Col, FloatingLabel, Form } from "react-bootstrap";
import styles from "@/styles/SeccionDeVenta.module.css"


const ContenedorDeNav = () => {
    return (
        <>

            <Col className="p-0 d-flex  m-0 mx-sm-3 align-items-center">
                <BuscadorInput />
            </Col>
            <Col xs="auto" className="p-0 d-flex align-items-center ">

                <FloatingLabel controlId="floatingCantidad" label="Cantidad">
                    <Form.Control type="text" className="rounded-3 shadow-sm" placeholder="Cantidad" />
                </FloatingLabel>
            </Col>

            <Col xs={3} className="p-0 d-flex justify-content-center align-items-center">
                <Button variant="none" className={`${styles.botonCarrito} px-4 py-2 shadow-sm`}>
                    <i className="fa-solid mx-2 fa-cart-shopping"></i>
                    <span>agregar al carrito</span>
                </Button>
            </Col>
        </>
    )
}

export default ContenedorDeNav