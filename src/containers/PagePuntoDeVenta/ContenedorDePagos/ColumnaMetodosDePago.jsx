import { ContenedorMetodosDePagosAgregados } from "@/containers//PagePuntoDeVenta/ContenedorDeMetodosDePagosAgregados/ContenedorMetodosDePagosAgregados"
import { IconClone } from "@/components//IconClone"
import { ListaDeMetodosDePagos } from "@/components//ListaDeMetodosDePagos"
import { SuspenseLoading } from "@/components//SuspenseLoading"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import React, { lazy } from "react"

const BotonesTactilesResponsive = lazy (()=> import("./BotonTacilResponsive"))

export const ColumnaMetodosDePago = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()



    return (
        <section id="metodos-de-pagos">

            <div className="d-flex justify-content-between   align-items-center my-2">

                <span className=" d-md-none ">
                    <SuspenseLoading>
                    <BotonesTactilesResponsive />
                    </SuspenseLoading>
                </span>


                <span className=" flex-grow-1 text-end">
                    <IconClone
                        mostrar={mostrar}
                        alternarMostrar={alternarMostrar} />
                </span>

            </div>

            {
                mostrar &&
                <ContenedorMetodosDePagosAgregados />
            }

            {
                !mostrar &&
                <ListaDeMetodosDePagos />
            }



        </section>

    )
}
