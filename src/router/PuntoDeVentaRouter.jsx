import { lazy } from 'react';
import { defer, redirect } from 'react-router-dom';
import { SuspenseMainPageLoading } from '@/components/Suspense/SuspenseMainPageLoading';

const PuntoDeVenta = lazy(() => import("/src/screens/PuntoDeVenta"))
const SeccionDeProductos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeProducto/SeccionDeProductos"))
const SeccionDeVenta = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/SeccionDeVenta"))
const SeccionVentaPagos = lazy(() => import('@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/[Pagos]/SeccionVentaPagos'))
const SeccionDeCaja = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/SeccionDeCaja"))
const SeccionDeCajaPagos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/[Pagos]/SeccionDeCajaPagos"))
const SeccionDeCompras = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCompras/SeccionDeCompras"))
const SeccionDeInventario = lazy(() => import("../containers/PagePos/ContenedorDeSecciones/SeccionDeInventario/SeccionDeInventario"))
const ErrorPage = lazy(() => import("@/components/ErrorPage/ErrorPage"))
const SeccionDeInventarioGestion = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeInventario/[gestion]/SeccionDeInventarioGestion"))
const SeccionDeClientes = lazy(() => import('../containers/PagePos/ContenedorDeSecciones/SeccionDeClientes/SeccionDeClientes'))

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
            element: <SeccionDeClientes />
        },
        {
            path: "inventario",
            element: <SeccionDeInventario />
        },
        {
            path: "inventario/gestion",
            element: <SeccionDeInventarioGestion />,
            loader: async () => {
                const promise = new Promise((resolve) =>
                    setTimeout(() => {
                        resolve({ db: "success" })
                    }, 5000)
                )
                return defer({ promise });
            }
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

