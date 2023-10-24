import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ListaUsuariosProvider } from './context/provider/ListaUsuariosProvider';
import { lazy } from 'react';
import { SuspenseLoading } from './components/SuspenseLoading';

const ErrorPage = lazy(() => import('./components/ErrorPage'))
const PuntoDeVenta = lazy(() => import("./screens/PuntoDeVenta"))
const Seleccion = lazy(() => import("./screens/Seleccion"))
const Empleado = lazy(() => import("./screens/Empleado"))


const router = createBrowserRouter([
  {
    path: "/empleado",
    element: <SuspenseLoading><Empleado /></SuspenseLoading>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pos",
    element: <SuspenseLoading><PuntoDeVenta /></SuspenseLoading>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Link to={"/empleado"}>Ir login</Link>,
    errorElement: <ErrorPage />,

  },
  {
    path: "/seleccion",
    element: <Seleccion />,
    errorElement: <ErrorPage />,
  },
  {
    path : "/caja",
  }
]);

function App() {
  return (
    <ListaUsuariosProvider>

      <RouterProvider router={router} />

    </ListaUsuariosProvider>

  )
}

export default App
