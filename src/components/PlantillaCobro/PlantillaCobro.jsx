
import { ContenedorCobroBody } from "./ContenedorCobroBody"
import { ContenedorCobroHeader } from "./ContenedorCobroHeader"
import { ContenedorCobro } from "./ContenedorCobro"
import { ProductoSeleccionadoProvider } from "../../context/provider/ProductoSeleccionadoProvider"
import { PlantillaPagos } from "../PlantillaPagos/PlantillaPagos"


export const PlantillaCobro = () => {
    return (
        <>
            <ContenedorCobro>
                <ProductoSeleccionadoProvider>
                    <ContenedorCobroHeader></ContenedorCobroHeader>
                    <ContenedorCobroBody></ContenedorCobroBody>
                </ProductoSeleccionadoProvider>
                <PlantillaPagos></PlantillaPagos>
            </ContenedorCobro>

        </>
    )
}
