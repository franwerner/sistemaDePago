import { lazy } from 'react';
import ErrorPage from '../components/ErrorPage';
import { defer, redirect, useLocation, useRoutes, useSearchParams } from 'react-router-dom';
import { retrasoTest } from '../helper/retrasoTest';

const PuntoDeVenta = lazy(() => retrasoTest(import("/src/screens/PuntoDeVenta")))
const SeccionDeProductos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeProducto/SeccionDeProductos"))
const SeccionDeVenta = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/SeccionDeVenta"))
const SeccionVentaPagos = lazy(() => import('@/containers/PagePos/ContenedorDeSecciones/SeccionDeVenta/[Pagos]/SeccionVentaPagos'))
const SeccionDeCaja = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/SeccionDeCaja"))
const SeccionDeCajaPagos = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCaja/[Pagos]/SeccionDeCajaPagos"))
const SeccionDeCompras = lazy(() => retrasoTest(import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeCompras/SeccionDeCompras"), 1))
const SeccionDeProductosAgregar = lazy(() => import("@/containers/PagePos/ContenedorDeSecciones/SeccionDeProducto/[Agregar]/SeccionDeProductosAgregar"))

const LoaderTest = () => {

    return (
        <p>
            Cargando...
        </p>
    )

}

export const PuntoDeVentaRouter = {
    path: "/pos",
    element: <PuntoDeVenta />,
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
            path: "productos/agregar/:id",
            element: <SeccionDeProductosAgregar />,
            loader: async ({ params, request }) => {

                await new Promise((resolve) => setTimeout(() => resolve(), 3331))
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
                    .then((data) => data.json());
                return defer(res)
            },
        },
        {
            path: "compras",
            loader: () => redirect("/pos/compras/1")
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

