import { Col, Container, Row } from "react-bootstrap"
import { ListaDeTarifas } from "./ListaDeTarifas"
import styles from "../styles/PlantillaPagos.module.css"


export const PlantillaPagos = () => {


    return (
        <>
            <Container fluid className={` ${styles.contenedorPlantillaPagos}`}>
                <Row>
                    <Col>
                    <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>
    
        
        
            </Container>
        </>
    )
}