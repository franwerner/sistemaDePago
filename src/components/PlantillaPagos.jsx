import { Col, Container, Row } from "react-bootstrap"
import { ListaDeTarifas } from "./ListaDeTarifas"
import styles from "../styles/PlantillaPagos.module.css"


export const PlantillaPagos = () => {


    return (
        <>
            <Container  fluid className={`${styles.contenedorPlantillaPagos}`}>
                <Row>
                    <Col className="px-3">
                        <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>

                <Row style={{height : "300px"}} className="p-3  border-danger">
                    <Col className={`text-center border align-items-center justify-content-center d-flex border-secondary border-2 ${styles.botonPagos}`}>
                        <div className={styles.test}>
                            <i className="fa-solid  fa-circle-arrow-right "></i>
                            <p className="fw-bolder ">Pagos</p>
                        </div>
                    </Col>
                    <Col className="border border-primary">

                    </Col>
                </Row>




            </Container>
        </>
    )
}