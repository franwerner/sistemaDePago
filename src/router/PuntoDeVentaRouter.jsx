import { lazy } from 'react';
import { SuspenseLoading } from '../components/SuspenseLoading';
import ErrorPage from '../components/ErrorPage';
import { useNavigate } from 'react-router-dom';

const PuntoDeVenta = lazy(() => import("/src/screens/PuntoDeVenta"))
const SeccionDeProductos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeProducto/SeccionDeProductos"))
const SeccionDeVenta = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/SeccionDeVenta"))
const SeccionVentaPagos = lazy(() => import('@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/[Pagos]/SeccionVentaPagos'))
const SeccionDeCaja = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/SeccionDeCaja"))
const SeccionDeCajaPagos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/[Pagos]/SeccionDeCajaPagos"))
const SeccionDeCajaPedidos = lazy(() => import('@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/[Pedidos]/SeccionDeCajaPedidos'))



export const seccionProducto = {
    path: "/pos",
    element: <SuspenseLoading><PuntoDeVenta /></SuspenseLoading>,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "productos",
            element: <SeccionDeProductos />
        },
        {
            path: "compras",
            element: <h1>1</h1>
        },
        {
            path: "caja",
            element: <SeccionDeCaja />
        },
        {
            path: "caja/pagos",
            element: <SeccionDeCajaPagos />
        },
        {
            path: "caja/pedidos/:id",
            element: <SeccionDeCajaPedidos />
        },
        {
            path: "clientes",
            element: <h1>3</h1>
        },
        {
            path: "almacen",
            element: <h1>4</h1>
        },
        {
            path: "venta",
            element: <SeccionDeVenta />
        },
        {
            path: "venta/pagos",
            element: <SeccionVentaPagos />,

        }
    ]
}

