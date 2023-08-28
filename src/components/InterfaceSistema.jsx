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
                <Container tabIndex={0} className='d-flex m-0 flex-column interface-sistema ' fluid>
                    <Row  style={{flexGrow : "0"}}>
                        <NavegacionHeader></NavegacionHeader>
                    </Row>
                    <Row style={{flexGrow : "1"}} className='d-flex flex-colum p-0 '>
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

