import { AgregarCerosANumeros } from "@/helper//AgregarCerosANumeros"
import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import styles from "@/styles/SeccionDeCaja.module.css"
import React, { Suspense, lazy } from "react"
import { Col, Table } from "react-bootstrap"

const ModalDetalleDePedido = lazy(() => import("./ModalDetalleDeCompra/ModalDetalleDeCompra"))

const theadTest = [
    { id: 1, "empleado": "Franco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 9898, "estado": "Pagado", "ticket": { caja: 1, orden: 1 } },
    { id: 2, "empleado": "Franco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 34454, "estado": "Pagado", "ticket": { caja: 1, orden: 2 } },
    { id: 3, "empleado": "Franco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 34454, "estado": "Pagado", "ticket": { caja: 1, orden: 3 } },
    { id: 4, "empleado": "Franco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 666, "estado": "Pagado", "ticket": { caja: 1, orden: 4 } },
    { id: 5, "empleado": "Franco Werner", "hora": "5/11/2023 17:05:23", "cliente": "Consumidor Anonimo", "total": 123, "estado": "Devuelto", "ticket": { caja: 1, orden: 5 } }
]

const TrTablaBody = React.memo(({ empleado, hora, cliente, total, estado, ticket, alternarMostrar }) => {

    const verificarEstado = estado == "Pagado" ? "success" : "danger"

    return (
        <tr onClick={alternarMostrar}>
            <th className="text-truncate fw-normal">{empleado}</th>
            <th className="text-truncate fw-normal">{hora}</th>

            <th className="text-truncate fw-normal">
                <div className="d-flex justify-content-center align-items-center">
                    <p className="m-0">{AgregarCerosANumeros({ numero: ticket.caja, digitos: 4 })}</p>
                    -
                    <p className="m-0">{AgregarCerosANumeros({ numero: ticket.orden, digitos: 5 })}</p>
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
                        ticket={props.ticket}
                        estado={props.estado}
                        alternarMostrar={alternarMostrar}
                    />
                </Suspense>
            )}
        </>



    )
}

const TablaDeCompras = () => {

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
                        theadTest.map(item =>
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