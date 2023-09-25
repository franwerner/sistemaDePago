
import { InterfaceSistema } from './containers/InterfaceSistema'
import { ListaUsuariosProvider } from './context/provider/ListaUsuariosProvider';
import { TarifaProvider } from './context/provider/tarifaProvider'

function App() {

  return (
    <>
      <ListaUsuariosProvider>

        <TarifaProvider>
 
          <InterfaceSistema ></InterfaceSistema>

        </TarifaProvider>

      </ListaUsuariosProvider>
    </>
  )
}

export default App
