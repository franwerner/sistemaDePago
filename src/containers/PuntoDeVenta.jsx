
import { ProductoReducerProvider } from '@/context/provider/ProductosReducerProvider';
import "../index.css"
import { Container, Row } from 'react-bootstrap';
import { NavegacionHeader } from '@/components/NavegacionHeader';
import { useEventoMostrar } from '../hooks/useEventoMostrar';
import ContenedorPrincipal from './ContenedorPrincipal/ContenedorPrincipal';
import { lazy } from 'react';
import { RestoDelPagoProvider } from '../context/provider/RestoDelPagoProvider';
import { SuspenseLoading } from '../components/SuspenseLoading';
const ContenedorDePagos = lazy(() => import("./ContenedorDePagos/ContenedorDePagos"))


export const PuntoDeVenta = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <Container
            className='d-flex scrollHidden  flex-column vh-100  p-0'
            fluid>

            <Row className='flex-grow-0 px-1'>
                <NavegacionHeader mostrar={mostrar} />
            </Row>

            <Row className=' overflow-auto flex-grow-1 p-0 m-0 h-100'>

                <ProductoReducerProvider>

                    {!mostrar &&
                        <ContenedorPrincipal
                            mostrarContendor={mostrar}
                            alternarMostrarContenedor={alternarMostrar} />
                    }

                    <RestoDelPagoProvider>
                        {mostrar &&
                            <SuspenseLoading>

                                <ContenedorDePagos
                                    alternarMostrar={alternarMostrar} />

                            </SuspenseLoading>
                        }

                    </RestoDelPagoProvider>

                </ProductoReducerProvider>

            </Row>

        </Container >
    )
}


