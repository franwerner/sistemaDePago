import { ContenedorMetodosDePagosAgregados } from "@/components//ContenedorMetodosDePagosAgregados"
import { IconClone } from "@/components//IconClone"
import { ListaDeMetodosDePagos } from "@/components//ListaDeMetodosDePagos"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { useSeleccionarElemento } from "@/hooks//useSeleccionProducto"


export const AlternarMetodosDePagos = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { seleccion, seleccionarElemento } = useSeleccionarElemento()

    return (
        <>
            <span className="d-flex justify-content-end my-2">

                <IconClone
                    mostrar={mostrar}
                    alternarMostrar={alternarMostrar} />

            </span>

            <span className={`${mostrar ? "d-block" : "d-none"}`}>
                <ContenedorMetodosDePagosAgregados
                    seleccionarElemento={seleccionarElemento}
                    seleccion={seleccion} />
            </span>

            <span className={` ${mostrar ? "d-none" : "d-block"}`}>
                <ListaDeMetodosDePagos />
            </span>

        </>

    )
}