import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ListaUsuariosProvider } from './context/provider/ListaUsuariosProvider';
import { lazy } from 'react';
import { PuntoDeVentaRouter } from './router/PuntoDeVentaRouter';
import { SuspenseMainPageLoading } from './components/SuspenseMainPageLoading';

const ErrorPage = lazy(() => import('./components/ErrorPage'))
const Seleccion = lazy(() => import("./screens/Seleccion"))
const Empleado = lazy(() => import("./screens/Empleado"))


const router = createBrowserRouter([
  {
    path: "/empleado",
    element: < Empleado />,
    errorElement: < ErrorPage />,
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
    path: "/caja",
  },

  { ...PuntoDeVentaRouter }


]);

function App() {
  return (
    <ListaUsuariosProvider>

      <SuspenseMainPageLoading>
        <RouterProvider router={router} />
      </SuspenseMainPageLoading>

    </ListaUsuariosProvider>

  )
}

export default App
