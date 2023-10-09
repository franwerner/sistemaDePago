import { Col, Container, Row } from "react-bootstrap"
import { ColumnaMetodosDePago } from "./ColumnaMetodosDePago"
import { NumerosTotales } from "./NumerosTotales"
import styles from "@/styles/ContenedorDePagos.module.css"
import { BotonTacil } from "./BotontACIL"

export const ContenedorDePagoBody = () => {

    return (

        <section id="seccion-pagos-principal"
            className={`h-100  px-2 ${styles.contenedorDePagoBody}  `}>

            <Row className="px-1 d-flex flex-column flex-md-row  h-100">

                <Col
                    className="scrollHidden h-100 pt-0 pb-3"
                    xs={{ order: "2" }}
                    md={{ order: "0" }}>

                    <ColumnaMetodosDePago />

                </Col>


                <Col
                    md={7}
                    className={` p-0 ${styles.seccionResto} h-auto`}>

                    <section
                        id="seccion-resto"
                        className="h-100">

                        <Container fluid className=" d-flex flex-column  h-100">

                            <Row className="text-center">
                                <NumerosTotales />
                            </Row>


                            <Row className="scrollHidden  mx-auto  flex-grow-1">
                                <BotonTacil />
                            </Row>

                        </Container>

                    </section>

                </Col>

            </Row>
        </section>
    )

}