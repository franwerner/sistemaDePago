import { lazy } from 'react';
import { SuspenseLoading } from '../components/SuspenseLoading';
import ErrorPage from '../components/ErrorPage';

const PuntoDeVenta = lazy(() => import("/src/screens/PuntoDeVenta"))
const SeccionDeProductos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeProducto/SeccionDeProductos"))
const SeccionDeVenta = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/SeccionDeVenta"))
const SeccionVentaPagos = lazy(() => import('@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/[SeccionVentaPagos]/SeccionVentaPagos'))
const SeccionDeCaja = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/SeccionDeCaja"))


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
            element: <SeccionVentaPagos />
        }
    ]
}

