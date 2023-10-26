import { lazy } from 'react';
import { SuspenseLoading } from '../components/SuspenseLoading';
import ErrorPage from '../components/ErrorPage';

const PuntoDeVenta = lazy(() => import("/src/screens/PuntoDeVenta"))
const SeccionDeProductos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeProducto/SeccionDeProductos"))
const SeccionDeVenta = lazy(()=> import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/SeccionDeVenta"))

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
            element: <h1>2</h1>
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
            element: <SeccionDeVenta/>
        }
    ]
}

