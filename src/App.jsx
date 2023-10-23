import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PosLogin } from './screens/PosLogin';
import { ListaUsuariosProvider } from './context/provider/ListaUsuariosProvider';
import { lazy } from 'react';
import { SuspenseLoading } from './components/SuspenseLoading';

const ErrorPage = lazy(() => import('./components/ErrorPage'))
const PuntoDeVenta = lazy(() => import("./screens/PuntoDeVenta"))

const router = createBrowserRouter([
  {
    path: "pos/login",
    element: <PosLogin />,
    errorElement: <ErrorPage />,
    // children : [
    //   {
    //     path : "/:id",
    //     element : <h1>hola</h1>
    //   }
    // ]

  },
  {
    path: "/pos",
    element: <SuspenseLoading><PuntoDeVenta /></SuspenseLoading>,
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
