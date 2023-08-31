
import { ProductoReducerProvider } from '../context/provider/ProductosReducerProvider';
import { NavegacionHeader } from './NavegacionHeader';
import "../index.css"
import { Col, Container, Row } from 'react-bootstrap';
import { BuscadorPorductosProvider } from '../context/provider/BuscardorProductosProvider';
import { PlantillaCobro } from './PlantillaCobro/PlantillaCobro';
import { PlantillaProductos } from './PlantillaProductos/PlantillaProductos';
import { SeccionCobroYPagos } from "../components/SeccionCobroYPagos"
import { PlantillaPagos } from './PlantillaPagos/PlantillaPagos';




export const InterfaceSistema = () => {

    
    return (
        <>
            <BuscadorPorductosProvider>
                <Container style={{ maxHeight: "100vh", overflow: "auto" }} id="interface-sistema" tabIndex={0} className='d-flex m-0 flex-column   vh-100' fluid>
                    <Row className='flex-grow-0 ' >
                        <NavegacionHeader></NavegacionHeader>
                    </Row>

                    <Row className='flex-grow-1 '>
                        <ProductoReducerProvider>

                            <SeccionCobroYPagos>

                                <Col className="overflow-hidden   d-flex  flex-column">
                                    <PlantillaCobro />
                                    <PlantillaPagos />
                                </Col>

                            </SeccionCobroYPagos>

                            <PlantillaProductos />
                        </ProductoReducerProvider>
                    </Row>

                </Container>
            </BuscadorPorductosProvider >

        </>
    )
}


