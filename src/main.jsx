import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CustomErrorProvider } from './context/provider/CustomErrorProvider'
import { ListaUsuariosProvider } from './context/provider/ListaUsuariosProvider';
import { TarifaProvider } from './context/provider/tarifaProvider'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h1>Ruta no existente</h1>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomErrorProvider>

      <ListaUsuariosProvider>

        <TarifaProvider>

   

            <RouterProvider router={router}>
            </RouterProvider>

      

        </TarifaProvider>

      </ListaUsuariosProvider>

    </CustomErrorProvider>

  </React.StrictMode>,
)
