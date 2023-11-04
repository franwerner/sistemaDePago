import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales"
import { Col, Row } from "react-bootstrap"
import styles from "@/styles/SeccionDeCaja.module.css"

export const SeccionDeCajaContenedorHead = () => {

    return (
        <Row className="border-bottom flex-grow-0 d-flex justify-content-end">

            <Col
                xs="6"
                md="4"
                lg={"auto"}
                className={`${styles.botonesDeNavegacion} bg-white p-1  d-flex align-items-center  border-end border-start `}>
                <i className="fa-solid fa-basket-shopping p-2 fs-3"></i>
                <div className="overflow-hidden">
                    <p className="m-0 text-truncate">{123}</p>
                    <p className="m-0 fw-medium  w-100">Pedidos</p>
                </div>
            </Col>

            <Col
                xs="6"
                md="4"
                lg={"auto"}
                className={`${styles.botonesDeNavegacion} bg-white p-1  d-flex align-items-center border-start`}>
                <i className="fa-solid fa-dollar-sign p-2 fs-2"></i>
                <div className="overflow-hidden">
                    <p className="m-0 text-truncate">{separarNumerosConDecimales(123456)}</p>
                    <p className="m-0 fw-medium  w-100">Pagos</p>
                </div>
            </Col>

        </Row>
    )

}
