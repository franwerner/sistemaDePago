import { Col, Container, Row } from "react-bootstrap";
import { ListaDeProductos } from "./ListaDeProductos";
import styles from "../../styles/PlantillaProductos.module.css"

export const ContainerDeProductos = ({ seccion }) => {


    return (
        <>
            <Container className={`pb-1 ${styles.contenedorProductos} flex-grow-1`}>
                <Row>
                    <Col style={{ maxHeight: "0px" }} className={`p-0  flex-wrap d-flex justify-content-center justify-content-md-start`} >

                        <ListaDeProductos seccion={seccion} />

                    </Col>
                </Row>

            </Container>
        </>
    )
}
