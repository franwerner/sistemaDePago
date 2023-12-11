import { cargaDiferida } from "@/common//helper/cargaDiferida"
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading"
import { productoReducerContext, restoDelPagoContext } from "@/context//Contextos"
import { lazy, useCallback, useContext } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useTotalMetodoDePago } from "../Utils/useTotalMetodoDePago"
import { useTotalListaProducto } from "../Utils/useTotalListaProducto"
import { useAplicarPorcentajeAProductos } from "../Utils/useAplicarPorcentajeAProductos"


const buscarCodigo = cargaDiferida(() => import("@/common/helper/buscarCodigoMensajePersonalizado"))
const TicketDeVenta = lazy(() => import("@/components/TicketDeVenta"))

const TicketProps = () => {

    const newList = useAplicarPorcentajeAProductos()

    const { descuento, total, adeudoTotal } = useTotalListaProducto()

    const { cambio } = useTotalMetodoDePago()

    return (
        <TicketDeVenta
            listaDeProductos={newList}
            cambio={cambio}
            adeudoTotal={adeudoTotal}
            descuento={descuento}
            sumaTotal={total}
        />
    )
}

const BotonValidar = () => {

    const { restante } = useTotalMetodoDePago()

    const navigate = useNavigate()

    const { listaProducto, borrarListado } = useContext(productoReducerContext)

    const { restablecerPagos, pagoActual } = useContext(restoDelPagoContext)

    const validacion = restante == 0 && listaProducto.length > 0 && pagoActual.length > 0

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
