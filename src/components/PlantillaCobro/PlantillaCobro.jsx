
import { ContenedorCobroBody } from "./ContenedorCobroBody"
import { ContenedorCobroHeader } from "./ContenedorCobroHeader"
import { ProductoSeleccionadoProvider } from "../../context/provider/ProductoSeleccionadoProvider"
import { Col, Container, Row } from "react-bootstrap"
import styles from "../../styles/PlantillaCobro.module.css"



export const PlantillaCobro = () => {



    return (
        <>

            <Container fluid className="p-0">
                <ProductoSeleccionadoProvider>
<<<<<<< HEAD

                    <Container fluid className="overflow-hidden  d-flex p-0 flex-column">
                        <Row>
                            <Col className={`d-flex flex-column ${styles.contenedorCobroPrincipal}`}>
                                <ContenedorCobroHeader />
                                <ContenedorCobroBody />
                            </Col>
                        </Row>

                        <Row className="flex-grow-1">
                            <Col>
                                <PlantillaPagos />
                            </Col>
                        </Row>
                    </Container>
=======
                    <Row >
                        <Col className={`d-flex flex-column ${styles.contenedorCobroPrincipal}`}>
                            <ContenedorCobroHeader />
                            <ContenedorCobroBody />
                        </Col>
                    </Row>
>>>>>>> werner
                </ProductoSeleccionadoProvider>
            </Container>
        </>
    )
}
