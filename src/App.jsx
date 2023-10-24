import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ListaUsuariosProvider } from './context/provider/ListaUsuariosProvider';
import { lazy } from 'react';
import { SuspenseLoading } from './components/SuspenseLoading';
import { seccionProducto } from './router/PuntoDeVentaRouter';

const ErrorPage = lazy(() => import('./components/ErrorPage'))
const PuntoDeVentaold = lazy(() => import("./screens/PuntoDeVentaold"))
const Seleccion = lazy(() => import("./screens/Seleccion"))
const Empleado = lazy(() => import("./screens/Empleado"))


const router = createBrowserRouter([
  {
    path: "/empleado",
    element: <SuspenseLoading><Empleado /></SuspenseLoading>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/puntoDeVentaold",
    element: <SuspenseLoading><PuntoDeVentaold /></SuspenseLoading>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Link to={"/empleado"}>Ir login</Link>,
    errorElement: <ErrorPage />,

  },
  {
    path: "/seleccion",
    element: <SuspenseLoading><Seleccion /></SuspenseLoading>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/caja",
  },

  { ...seccionProducto }


]);

function App() {
  return (
    <ListaUsuariosProvider>

      <RouterProvider router={router} />

    </ListaUsuariosProvider>

  )
}

export default App
