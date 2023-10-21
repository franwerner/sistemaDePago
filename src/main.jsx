import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PuntoDeVenta } from './containers/PuntoDeVenta.jsx'


const router = createBrowserRouter([
  {
    path: "/pos",
    element: <PuntoDeVenta></PuntoDeVenta>,
    errorElement: <h1>Ruta no existente</h1>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App>
      <RouterProvider router={router}>

      </RouterProvider>
    </App>

  </React.StrictMode>,
)
