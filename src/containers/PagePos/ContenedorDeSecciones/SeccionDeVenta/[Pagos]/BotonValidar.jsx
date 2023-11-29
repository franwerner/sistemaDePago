import { cargaDiferida } from "@/common//helper/cargaDiferida"
import { SuspenseCompontentsLoading } from "@/components//SuspenseCompontentsLoading"
import { TarifaContex, productoReducerContext, restoDelPagoContext } from "@/context//Contextos"
import { useCalcularCambio } from "@/hooks//useCalcularCambioTotal"
import { useCalcularDescuento } from "@/hooks//useCalcularDescuento"
import { useRestanteTotal } from "@/hooks//useRestanteTotal"
import { useSumaTotalDeProductos } from "@/hooks//useSumaTotalDeProductos"
import { lazy, useCallback, useContext } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const TicketDeVenta = lazy(() => import("@/components/TicketDeVenta"))

const TicketProps = () => {

    const { listaProducto } = useContext(productoReducerContext)

    const suma = useSumaTotalDeProductos()

    const descuento = useCalcularDescuento()

    const cambio = useCalcularCambio()

    const { tarifaActual } = useContext(TarifaContex)

    return (
        <TicketDeVenta
            listaDeProductos={listaProducto}
            cambio={cambio}
            descuento={descuento}
            sumaTotal={suma}
            porcentaje={tarifaActual.porcentaje}
        />
    )
}

const buscarCodigo = cargaDiferida(() => import("@/common/helper/buscarCodigoMensajePersonalizado"))

const BotonValidar = () => {

    const restante = useRestanteTotal()

    const navigate = useNavigate()

    const { listaProducto, borrarListado } = useContext(productoReducerContext)

    const { restablecerPagos } = useContext(restoDelPagoContext)

    const validacion = restante == 0 && listaProducto.length > 0

    const onBuscarCodigo = useCallback((codigo) => {
        buscarCodigo(codigo)
    }, [])



    const onClick = () => {
        try {
            if (!validacion) throw new ErrorEvent("2F")

            print()

            buscarCodigo({ codigo: "3F" })

            borrarListado()

            restablecerPagos()

            navigate("/pos/venta")

        } catch (error) {
            onBuscarCodigo({ codigo: `${error.type}` })
        }

    }

    const className = validacion ? "primary" : "secondary"

    return (
        <SuspenseCompontentsLoading texto="Ticket">
            <Button
                onClick={onClick}
                style={{ minWidth: "140px" }}
                className={`zoom bg-${className} border-0 shadow text-white fs-4`}>
                Validar
                <i className="fa-solid border-0 fa-angles-right"></i>

            </Button>

            {
                validacion && <TicketProps />
            }

        </SuspenseCompontentsLoading>
    )
}

export default BotonValidar
