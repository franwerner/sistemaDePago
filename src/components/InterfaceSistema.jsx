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
                <Container tabIndex={0} className='d-flex m-0 flex-column  vh-100' fluid>
                    <Row className='flex-grow-0' >
                        <NavegacionHeader></NavegacionHeader>
                    </Row>
                    <Row className='flex-grow-1  p-0 '>
                        <ProductoReducerProvider>
                            <PlantillaCobro></PlantillaCobro>
                            <SeccionesProductos></SeccionesProductos>
                        </ProductoReducerProvider>
                    </Row>

                </Container>
            </BuscadorPorductosProvider >
        </>
    )
}


