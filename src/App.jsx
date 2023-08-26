

import { InterfaceSistema } from './components/InterfaceSistema'
import { CustomErrorProvider } from './context/provider/CustomErrorProvider'
import { ListaUsuariosProvider } from './context/provider/ListaUsuariosProvider';
import { TarifaProvider } from './context/provider/tarifaProvider'

function App() {


  return (
    <>
      <CustomErrorProvider>
          <ListaUsuariosProvider>
          <TarifaProvider>
            <InterfaceSistema></InterfaceSistema>
            </TarifaProvider>
          </ListaUsuariosProvider>
      </CustomErrorProvider>
    </>
  )
}

export default App
