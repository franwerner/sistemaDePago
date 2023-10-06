import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { InterfaceSistema } from './containers/InterfaceSistema.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <InterfaceSistema></InterfaceSistema>,
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
