import { lazy } from 'react';
import { defer, redirect } from 'react-router-dom';
import { SuspenseMainPageLoading } from '../components/SuspenseMainPageLoading';

const PuntoDeVenta = lazy(() => import("/src/screens/PuntoDeVenta"))
const SeccionDeProductos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeProducto/SeccionDeProductos"))
const SeccionDeVenta = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/SeccionDeVenta"))
const SeccionVentaPagos = lazy(() => import('@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/[Pagos]/SeccionVentaPagos'))
const SeccionDeCaja = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/SeccionDeCaja"))
const SeccionDeCajaPagos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/[Pagos]/SeccionDeCajaPagos"))
const SeccionDeCompras = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCompras/SeccionDeCompras"))
const SeccionDeProductosAgregar = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeProducto/[Agregar]/SeccionDeProductosAgregar"))
const ErrorPage = lazy(() => import("@/components/ErrorPage"))


export const PuntoDeVentaRouter = {
    path: "/pos",
    element: <SuspenseMainPageLoading><PuntoDeVenta /></SuspenseMainPageLoading>,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "productos",
            element: <SeccionDeProductos />
        },
        {
            path: "productos/:seccion",
            element: <SeccionDeProductos />
        },
        {
            path: "productos/agregar",
            element: <SeccionDeProductosAgregar />,
        },
        {
            path: "compras",
            loader: () => redirect("/pos/compras/1"),
        },
        {
            path: "compras/:id",
            element: <SeccionDeCompras />,
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

