import { Col, Row, Stack } from "react-bootstrap"
import styles from "@/styles/SeccionDeCaja.module.css"

export const SeccionDeCajaContenedorBody = () => {
    return (
        <Row className="h-50 m-0 ">

            <Col className="">

                <Stack
                    gap={5}
                    direction="horizontal"
                    className={`${styles.seccionCajaBody} align-items-center h-100 fw-medium`} >

                    <div className="">
                        <p>Abierto por</p>
                        <p>Punto de venta</p>
                        <p className="my-0">Apertura</p>
                    </div>
                    <div className="border-start  mx-1 px-3 ">
                        <p>Franco Werner</p>
                        <p>Provincias unidas 1922</p>
                        <p className="my-0 text-dark fw-light">3/11/2023 17:01:56</p>
                    </div>

                </Stack>

            </Col>
        </Row>
    )
}