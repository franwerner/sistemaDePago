
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
                    <Row className={`d-flex flex-column ${styles.contenedorCobroPrincipal}`}>
                        <ContenedorCobroHeader />
                        <ContenedorCobroBody />
                    </Row>
                </ProductoSeleccionadoProvider>
            </Container>
        </>
    )
}
