
import { PlantillaPagos } from "../PlantillaPagos"
import { ContenedorCobroBody } from "./ContenedorCobroBody"
import { ContenedorCobroHeader } from "./ContenedorCobroHeader"
import { ContenedorCobro } from "./ContenedorCobro"
import { ProductoSeleccionadoProvider } from "../../context/provider/ProductoSeleccionadoProvider"


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
