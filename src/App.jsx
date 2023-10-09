

import { PuntoDeVenta } from './containers/PuntoDeVenta';
import { ListaUsuariosProvider } from './context/provider/ListaUsuariosProvider';
import { TarifaProvider } from './context/provider/tarifaProvider'

function App() {

  return (

      <ListaUsuariosProvider>

        <TarifaProvider>

          <PuntoDeVenta />

        </TarifaProvider>

      </ListaUsuariosProvider>

  )
}

export default App
