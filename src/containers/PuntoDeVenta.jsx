
import { ProductoReducerProvider } from '@/context/provider/ProductosReducerProvider';
import "../index.css"
import { Container, Row } from 'react-bootstrap';
import { NavegacionHeader } from '@/components/NavegacionHeader';
import { ContenedorDePagos } from './ContenedorDePagos/ContenedorDePagos';
import { useEventoMostrar } from '../hooks/useEventoMostrar';
import { ContenedorPrincipal } from './ContenedorPrincipal';

export const PuntoDeVenta = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <Container
            className='d-flex scrollHidden  flex-column vh-100'
            fluid>

            <Row className='flex-grow-0'>
                <NavegacionHeader mostrar={mostrar} />
            </Row>

            <Row className=' overflow-auto flex-grow-1 p-0 m'>

                <main className='h-100 w-100 p-0 '>

                    <ProductoReducerProvider>

                        <ContenedorPrincipal
                            mostrarContenedor={mostrar}
                            alternarMostrarContenedor={alternarMostrar} />

                        <ContenedorDePagos
                            mostrar={mostrar}
                            alternarMostrar={alternarMostrar} />


                    </ProductoReducerProvider>

                </main>
            </Row>

        </Container>
    )
}


