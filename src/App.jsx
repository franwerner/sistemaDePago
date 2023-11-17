import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ListaUsuariosProvider } from './context/provider/ListaUsuariosProvider';
import { Suspense, lazy } from 'react';
import { PuntoDeVentaRouter } from './router/PuntoDeVentaRouter';
import { SuspenseMainPageLoading } from './components/SuspenseMainPageLoading';

const ErrorPage = lazy(() => import('./components/ErrorPage'))
const Seleccion = lazy(() => import("./screens/Seleccion"))
const Empleado = lazy(() => import("./screens/Empleado"))


const router = createBrowserRouter([
  {
    path: "/empleado",
    element: <SuspenseMainPageLoading>< Empleado /></SuspenseMainPageLoading>,
    errorElement: < ErrorPage />,
  },
  {
    path: "/",
    element: <SuspenseMainPageLoading><Seleccion /></SuspenseMainPageLoading>,
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


      <Suspense fallback={""}>
        <RouterProvider router={router} />
      </Suspense>

    </ListaUsuariosProvider>

  )
}

export default App
