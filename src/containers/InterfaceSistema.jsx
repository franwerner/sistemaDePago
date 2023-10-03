
import { ProductoReducerProvider } from '@/context/provider/ProductosReducerProvider';
import "../index.css"
import { Col, Container, Row } from 'react-bootstrap';
import { BuscadorPorductosProvider } from '@/context/provider/BuscardorProductosProvider';
import { PlantillaCobro } from './PlantillaCobro/PlantillaCobro';
import { PlantillaProductos } from './PlantillaProductos/PlantillaProductos';
import { ColumnaInteractiva } from './ColumnaInteractiva';
import { PlantillaPagos } from './PlantillaPagos/PlantillaPagos';
import { NavegacionHeader } from '@/components/NavegacionHeader';

export const InterfaceSistema = () => {


    return (
        <>
            <BuscadorPorductosProvider>
                <Container
                    style={{ maxHeight: "100vh" }}
                    id="interface-sistema" tabIndex={0}
                    className='d-flex scrollHidden m-0 flex-column  vh-100'
                    fluid>

                    <Row className='flex-grow-0 ' >
                        <NavegacionHeader />
                    </Row>

                    <Row className='flex-grow-1   '>
                        <ProductoReducerProvider>

                            <ColumnaInteractiva>
                                <Col className="overflow-hidden  h-100  d-flex  flex-column">
                                    <PlantillaCobro />
                                    <PlantillaPagos />
                                </Col>
                            </ColumnaInteractiva>

                            <PlantillaProductos />

                        </ProductoReducerProvider>
                    </Row>

                </Container>
            </BuscadorPorductosProvider >

        </>
    )
}


