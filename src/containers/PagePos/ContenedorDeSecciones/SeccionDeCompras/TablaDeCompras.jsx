import { SuspenseSecondaryPageLoading } from "@/components//SuspenseSecondaryPageLoading"
import { QueryParamsContext } from "@/context//Contextos"
import { AgregarCerosANumeros } from "@/helper//AgregarCerosANumeros"
import { algoritmoDeOrden } from "@/helper//algoritmoDeOrden"
import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import styles from "@/styles/SeccionDeCaja.module.css"
import React, { Suspense, lazy, useContext } from "react"
import { Col, Table } from "react-bootstrap"
import { Await } from "react-router-dom"


const ModalDetalleDePedido = lazy(() => import("./ModalDetalleDeCompra/ModalDetalleDeCompra"))

const theadTest = [
    { id: 1, "empleado": "Aranco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 9898, "estado": "Pagado", orden: 1 },
    { id: 2, "empleado": "ABanco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 34454, "estado": "Pagado", orden: 2 },
    { id: 3, "empleado": "Franco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 34454, "estado": "Pagado", orden: 3 },
    { id: 4, "empleado": "Dranco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 666, "estado": "Pagado", orden: 4 },
    { id: 5, "empleado": "Hranco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 123, "estado": "Devuelto", orden: 5 }
]

const TrTablaBody = React.memo(({ empleado, hora, cliente, total, estado, orden, alternarMostrar }) => {

    const verificarEstado = estado == "Pagado" ? "success" : "danger"

    return (
        <tr onClick={alternarMostrar}>
            <th className="text-truncate fw-normal">{empleado}</th>
            <th className="text-truncate fw-normal">{hora}</th>

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
                    <p className="m-0">{estado}</p>
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

            {mostrar && (
                <Suspense fallback={""}>
                    <ModalDetalleDePedido
                        mostrar={mostrar}
                        orden={props.orden}
                        estado={props.estado}
                        alternarMostrar={alternarMostrar}
                    />
                </Suspense>
            )}
        </>



    )
}

const TablaDeCompras = () => {

    const { queryParams } = useContext(QueryParamsContext)

    const { iniciarSort } = algoritmoDeOrden(queryParams)


    return (
                <Col className="m-0 p-0 shadow h-100  scrollBarPersonalizada">
                    <Table className={styles.tablaDePedidos} hover >
                        <thead className="shadow align-middle text-center  position-relative">
                            <tr>
                                <th>Empleado</th>
                                <th>Hora</th>
                                <th>Ticket</th>
                                <th>Cliente</th>
                                <th>Total</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle text-center">
                            {
                                iniciarSort(theadTest).map(item =>
                                    <TablaTbody
                                        key={item.id}
                                        {...item} />
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
    );
}


export default TablaDeCompras