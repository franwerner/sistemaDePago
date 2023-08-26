import { PlantillaCobro } from './PlantillaCobro'
import { ProductoReducerProvider } from '../context/provider/ProductosReducerProvider';
import { SeccionesProductos } from './SeccionesProductos';
import { NavegacionHeader } from './NavegacionHeader';
import "../index.css"
import { Container, Row } from 'react-bootstrap';
import { BuscadorPorductosProvider } from '../context/provider/BuscardorProductosProvider';






export const InterfaceSistema = () => {

    return (
        <>
            <BuscadorPorductosProvider>
                <Container className='  interface-sistema ' fluid>
                    <Row>
                        <NavegacionHeader></NavegacionHeader>
                    </Row>
                    <Row className=' p-0 d-md-flex'>
                        <ProductoReducerProvider>
                            <PlantillaCobro></PlantillaCobro>
                            <SeccionesProductos></SeccionesProductos>
                        </ProductoReducerProvider>
                    </Row>
                </Container>
            </BuscadorPorductosProvider>
        </>

    )

}

