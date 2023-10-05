
import { ProductoReducerProvider } from '@/context/provider/ProductosReducerProvider';
import "../index.css"
import { Col, Container, Row } from 'react-bootstrap';
import { BuscadorPorductosProvider } from '@/context/provider/BuscardorProductosProvider';
import { PlantillaCobro } from './PlantillaCobro/PlantillaCobro';
import { PlantillaProductos } from './PlantillaProductos/PlantillaProductos';
import { ColumnaInteractiva } from './ColumnaInteractiva';
import { PlantillaPagos } from './PlantillaPagos';
import { NavegacionHeader } from '@/components/NavegacionHeader';
import { ContenedorDePagos } from './ContenedorDePagos/ContenedorDePagos';
import { useEventoMostrar } from '../hooks/useEventoMostrar';
import { ContenedorPrincipal } from './ContenedorPrincipal';

export const InterfaceSistema = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>
            <BuscadorPorductosProvider>
                <Container
                    style={{ maxHeight: "100vh" }}
                    id="interface-sistema" tabIndex={0}
                    className='d-flex scrollHidden m-0 flex-column vh-100'
                    fluid>

                    <Row className='flex-grow-0 ' >
                        <NavegacionHeader mostrar={mostrar} />
                    </Row>


                    <main
                        style={{ overflowY: "auto", overflowX: "hidden" }}
                        className='h-100  flex-grow-1 p-0 '>

                        <Row

                            className='h-100  p-0'>



                            <ProductoReducerProvider>

                                <ContenedorPrincipal
                                    mostrar={mostrar}
                                    alternarMostrar={alternarMostrar} />

                                <ContenedorDePagos
                                    mostrar={mostrar}
                                    alternarMostrar={alternarMostrar} />


                            </ProductoReducerProvider>

                        </Row>

                    </main>
                </Container>
            </BuscadorPorductosProvider >

        </>
    )
}


