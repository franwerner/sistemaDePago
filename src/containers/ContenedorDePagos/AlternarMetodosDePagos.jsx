import { ContenedorDeBotonesTactiles } from "@/components//ContenedorDeBotonesTactiles"
import { ContenedorMetodosDePagosAgregados } from "@/components//ContenedorMetodosDePagosAgregados"
import { IconCalculator } from "@/components//IconCalculator"
import { IconClone } from "@/components//IconClone"
import { ListaDeMetodosDePagos } from "@/components//ListaDeMetodosDePagos"
import { restoDelPagoContext } from "@/context//Contextos"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { useSeleccionarElemento } from "@/hooks//useSeleccionProducto"
import styles from "@/styles/ContenedorDePagos.module.css"
import { useContext } from "react"

const BotonesTactilesResponsive = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { modificarResto, pagoActual } = useContext(restoDelPagoContext)

    const { ultimoSeleccionado = { resto: 0 } } = pagoActual


    return (
        <>

            {
                mostrar &&
                <span
                    className={`${styles.botonesTactilesResize} position-absolute  d-flex justify-content-center  d-md-none`}>
                    <div className={`${styles.contendorDeBotonesTactiles}`}>
                        <ContenedorDeBotonesTactiles
                            modificadorDefault={modificarResto}
                            numeroDefault={ultimoSeleccionado.resto} />
                    </div>
                </span>

            }


            <IconCalculator
                mostrar={mostrar}
                alternarMostrar={alternarMostrar} />

        </>
    )

}

export const AlternarMetodosDePagos = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { seleccion, seleccionarElemento } = useSeleccionarElemento()

    return (
        <section id="metodos-de-pagos">

            <div className="d-flex justify-content-between   align-items-center my-2">

                <span className=" d-md-none ">
                    <BotonesTactilesResponsive />
                </span>


                <span className=" flex-grow-1 text-end">
                    <IconClone
                        mostrar={mostrar}
                        alternarMostrar={alternarMostrar} />
                </span>

            </div>

            {
                mostrar &&
                <ContenedorMetodosDePagosAgregados
                    seleccionarElemento={seleccionarElemento}
                    seleccion={seleccion} />
            }

            {
                !mostrar &&
                <ListaDeMetodosDePagos />
            }



        </section>

    )
}