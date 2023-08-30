
import { ContenedorCobroBody } from "./ContenedorCobroBody"
import { ContenedorCobroHeader } from "./ContenedorCobroHeader"
import { ContenedorCobro } from "./ContenedorCobro"
import { ProductoSeleccionadoProvider } from "../../context/provider/ProductoSeleccionadoProvider"
import { PlantillaPagos } from "../PlantillaPagos/PlantillaPagos"
import { Col, Container, Row } from "react-bootstrap"
import styles from "../../styles/PlantillaCobro.module.css"


export const PlantillaCobro = () => {
    return (
        <>
            <ContenedorCobro>

                <ProductoSeleccionadoProvider>

                    <Container fluid className="overflow-hidden  d-flex p-0 flex-column">
                        <Row>
                            <Col className={`${styles.contenedorCobroPrincipal} d-flex flex-column`}>
                                <ContenedorCobroHeader />
                                <ContenedorCobroBody />
                            </Col>

                        </Row>

                        <Row className="flex-grow-1">
                            <PlantillaPagos />
                        </Row>
                    </Container>
                </ProductoSeleccionadoProvider>

            </ContenedorCobro>

        </>
    )
}
