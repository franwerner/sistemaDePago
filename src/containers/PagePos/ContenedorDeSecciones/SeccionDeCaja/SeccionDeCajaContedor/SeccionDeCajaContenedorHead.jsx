import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales"
import { Col, Row } from "react-bootstrap"
import styles from "@/styles/SeccionDeCaja.module.css"
import { Link } from "react-router-dom"

export const SeccionDeCajaContenedorHead = () => {

    return (
        <Row className="border-bottom justify-content-end">

            <Col
                xs="6"
                md="4"
                lg={"auto"}
                className={`${styles.botonesDeNavegacion} p-0  m-0`}>

                <Link
                    className="d-flex p-1 border-start bg-hover  align-items-center"
                    to={"pagos"}>
                    <i className="fa-solid fa-dollar-sign p-2 fs-2"></i>
                    <div className="overflow-hidden">
                        <p className="m-0 text-truncate">{separarNumerosConDecimales(123456)}</p>
                        <p className="m-0 fw-medium  w-100">Pagos</p>
                    </div>
                </Link>

            </Col>


        </Row>
    )

}
