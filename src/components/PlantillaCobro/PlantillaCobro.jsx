
import { ContenedorCobroBody } from "./ContenedorCobroBody"
import { ContenedorCobroHeader } from "./ContenedorCobroHeader"
import { ProductoSeleccionadoProvider } from "../../context/provider/ProductoSeleccionadoProvider"
import { Col, Row } from "react-bootstrap"
import styles from "../../styles/PlantillaCobro.module.css"



export const PlantillaCobro = () => {
    return (
        <>
            <Row>
                <ProductoSeleccionadoProvider>
                    <Col className={`d-flex flex-column ${styles.contenedorCobroPrincipal}`}>
                        <ContenedorCobroHeader />
                        <ContenedorCobroBody />
                    </Col>
                </ProductoSeleccionadoProvider>
            </Row>
        </>
    )
}
