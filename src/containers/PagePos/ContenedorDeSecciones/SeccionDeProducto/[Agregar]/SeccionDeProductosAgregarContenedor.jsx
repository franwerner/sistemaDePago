import { Col, FloatingLabel, Form, Row } from "react-bootstrap"


export const SeccionDeProductosAgregarContenedor = () => {

    return (
        <Col
            xs={11}
            md={7}
            lg={6}
            xl={5}
            xxl={4}
            className="d-flex shadow flex-column justify-content-center h-100 ">
            <Row className="m-0 flex-grow-1 ">
                <Col className="d-flex justify-content-center  align-items-center">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Precio"
                        className="mb-3">
                        <Form.Control type="text" aria-labelledby="Precio del producto" placeholder="nombre" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="m-0 flex-grow-1 ">
                <i className="fa-solid fs-0 fa-camera-retro"></i>
            </Row>
            <Row className="m-0 flex-grow-1 ">
                <i className="fa-solid fs-0 fa-camera-retro"></i>
            </Row>
        </Col>
    )

}
