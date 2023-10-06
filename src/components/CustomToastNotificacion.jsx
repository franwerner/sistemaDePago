import { Col, Container, Row, Toast, ToastContainer } from "react-bootstrap"
import styles from "@/styles/CustomToastNotificacion.module.css"

export const CustomToastNotificaciones = ({ alerta, alternarMostrar, mostrar }) => {

    const { codigo, motivo, tipo } = alerta

    return (
        <ToastContainer
            className="d-flex position-absolute w-100 p-3 justify-content-end overflow-hidden"
            position="top-start">

            <Toast
                className={`${styles.toastContainer}`}
                show={mostrar}
                onClose={alternarMostrar}
                autohide
                delay={4500} >

                <Toast.Header className="w-100 text-end p-0 px-3 pt-2 d-flex justify-content-end border-0" />

                <Toast.Body className=" p-0 px-1" >

                    <Container fluid className="p-0 ">

                        <Row className="overflow-hidden w-100">
                            <Col
                                xs={"auto"}
                                className={`${styles.icon} d-flex  justify-content-center align-items-center p-0 mx-3 fs-1 `}>

                                <i className="fa-solid text-danger mb-1 mx-2  fa-triangle-exclamation"></i>

                            </Col>

                            <Col className="p-0">
                                <div className="pe-4 m-0 ">
                                    <h2 className="fs-5 m-0 my-1 fw-semibold ">{tipo} <span className="text-danger ">#{codigo}</span></h2>
                                    <p style={{ wordBreak: "break-word", color: "#555" }}>{motivo}</p>
                                </div>
                            </Col>

                            <span className={`p-0 bg-danger ${styles.lineaTemporal}`} />

                        </Row>

                    </Container>

                </Toast.Body>

            </Toast>

        </ToastContainer>
    )

}