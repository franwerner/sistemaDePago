
import { ProductoReducerProvider } from '../context/provider/ProductosReducerProvider';
import { NavegacionHeader } from './NavegacionHeader';
import "../index.css"
import { Container, Row } from 'react-bootstrap';
import { BuscadorPorductosProvider } from '../context/provider/BuscardorProductosProvider';
import { PlantillaCobro } from './PlantillaCobro/PlantillaCobro';
import { PlantillaProductos } from './PlantillaProductos/PlantillaProductos';





export const InterfaceSistema = () => {


    return (
        <>
            <BuscadorPorductosProvider>
                <Container  tabIndex={0} className='d-flex m-0 flex-column  vh-100' fluid>
                    <Row className='flex-grow-0' >
                        <NavegacionHeader></NavegacionHeader>
                    </Row>
                    <Row className='flex-grow-1   p-0 '>
                        <ProductoReducerProvider>
                            <PlantillaCobro></PlantillaCobro>
                            <PlantillaProductos></PlantillaProductos>
                        </ProductoReducerProvider>
                    </Row>

                </Container>
            </BuscadorPorductosProvider >
        </>
    )
}


