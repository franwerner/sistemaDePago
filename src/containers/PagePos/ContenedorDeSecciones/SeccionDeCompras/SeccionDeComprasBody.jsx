import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading"
import { QueryParamsContext } from "@/context//Contextos"
import { AgregarCerosANumeros } from "@/common/helper/AgregarCerosANumeros"
import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales"
import { useAlgoritmoDeOrden } from "@/hooks//useAlgoritmoDeOrden"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { lazy, memo, useContext } from "react"
import { Col } from "react-bootstrap"
import { obtenerFecha } from "@/common//helper/obtenerFecha"
import { primeraLetraMayuscula } from "@/common//helper/primeraLetraMayuscula"
import { TablaDefault } from "@/components//TablaDefault"

const ModalDetalleDePedido = lazy(() => import("./ModalDetalleDeCompra/ModalDetalleDeCompra"))

const theadTest = [
    { id: 1, "empleado": "Aranco Werner", "fecha": 1631011278000, "cliente": "Consumidor Anonimo", "total": 9898, "estado": "pagado", orden: 1 },
    { id: 2, "empleado": "ABanco Werner", "fecha": 1634825246000, "cliente": "Consumidor Anonimo", "total": 34454, "estado": "pagado", orden: 2 },
    { id: 4, "empleado": "Dranco Werner", "fecha": 1643562391000, "cliente": "Consumidor Anonimo", "total": 666, "estado": "pagado", orden: 4 },
    { id: 5, "empleado": "Hranco Werner", "fecha": 1647356814000, "cliente": "Consumidor Anonimo", "total": 123, "estado": "devuelto", orden: 5 },
    { id: 3, "empleado": "Franco Werner", "fecha": 1640928132000, "cliente": "Consumidor Anonimo", "total": 34454, "estado": "pagado", orden: 3 },
]

const TrTablaBody = memo(({
    empleado,
    fecha,
    cliente,
    total,
    estado,
    orden,
    alternarMostrar
}) => {

    const verificarEstado = estado == "pagado" ? "success" : "danger"

    const { hora, minutos, segundos } = obtenerFecha(fecha)


    return (
        <tr onClick={alternarMostrar}>
            <th className="text-truncate fw-normal">{empleado}</th>
            <th className="text-truncate fw-normal">{hora}:{minutos}:{segundos}</th>

            <th className="text-truncate fw-normal">
                <div className="d-flex justify-content-center align-items-center">
                    <p className="m-0">{AgregarCerosANumeros({ numero: 1, digitos: 4 })}</p>
                    -
                    <p className="m-0">{AgregarCerosANumeros({ numero: orden, digitos: 5 })}</p>
                </div>
            </th>

            <th className="text-truncate fw-normal">{cliente}</th>
            <th className="text-truncate fw-semibold">$ {separarNumerosConDecimales(total)}</th>
            <th className="text-truncate fw-normal">
                <div
                    className={`bg-${verificarEstado} rounded-4 text-white fw-semibold p-1 `}>
                    <p className="m-0">{primeraLetraMayuscula(estado)}</p>
                </div>
            </th>
        </tr>
    )
})

const TablaTbody = (props) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>
            <TrTablaBody {...props} alternarMostrar={alternarMostrar} />

            {
                mostrar && (

                    <ModalDetalleDePedido
                        mostrar={mostrar}
                        orden={props.orden}
                        estado={props.estado}
                        alternarMostrar={alternarMostrar}
                    />

                )
            }
        </>

    )
}

const thead = ["Empleado", "Hora", "Ticket", "Cliente", "Total", "Estado"]

const SeccionDeComprasBody = () => {

    const { queryParams } = useContext(QueryParamsContext)


    const { iniciarSort } = useAlgoritmoDeOrden(queryParams["orden"])


    return (
        <Col className="m-0 p-0 shadow h-100  scrollBarPersonalizada">
            <SuspenseCompontentsLoading texto={"Cargando ticket"} >
                <TablaDefault thead={thead}>
                    {
                        iniciarSort(theadTest).map(item =>
                            <TablaTbody
                                key={item.id}
                                {...item} />
                        )
                    }
                </TablaDefault>
            </SuspenseCompontentsLoading>
        </Col>
    );
}


export default SeccionDeComprasBody