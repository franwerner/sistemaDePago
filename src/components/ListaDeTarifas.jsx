import React, { useContext } from "react"
import { TarifaContex } from "../context/Contextos"
import { Button, Col, Modal, Row, Table } from "react-bootstrap"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import styles from "../styles/ListaDeTarifas.module.css"

const ListaTarifas = React.memo(({ alternarMostrar, tarifaActual }) => {

    const { cambiarTarifa, tarifa } = useContext(TarifaContex)

    const compararTarifaActual = (tarifas) => {

        if (tarifa.tipoDePago == tarifas.tipoDePago) {
            return {
                background: "#88dc65",
                color: "white"
            }
        } else {
            return {}
        }
    }

    const { background, color } = compararTarifaActual(tarifaActual)


    return (
        <>
            <tr
                onClick={() => {
                    cambiarTarifa(tarifaActual)
                    alternarMostrar()
                }}
                className="text-center"
            >
                <td style={{
                    background,
                    color
                }} >
                    {tarifaActual.tipoDePago}
                </td>
                <td style={{
                    background,
                    color
                }}>
                    {tarifaActual.tarifa}%
                </td>
            </tr>

        </>
    )
})

const BotonTarifa = ({ alternarMostrar }) => {

    const { tarifa } = useContext(TarifaContex)

    return (
        <>

            <Col  onClick={alternarMostrar} className={`d-flex p-1 rounded-1 mt-3  justify-content-center align-items-center ${styles.BotonTarifa}`}>
                <i className={`fa-solid fa-list me-1 fs-5`}></i>
                <span className="fs-5 "  >
                    Tar.{tarifa.tipoDePago}
                </span>

            </Col>

        </>
    )
}

export const ListaDeTarifas = React.memo(() => {

    const { tarifa, listadoDeTarifas } = useContext(TarifaContex)

    const { mostrar, alternarMostrar } = useEventoMostrar()



    return (
        <>
            <BotonTarifa alternarMostrar={alternarMostrar}></BotonTarifa>

            {mostrar &&
                <Modal show={mostrar} onHide={alternarMostrar}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: "#555555" }} className="fw-bolder">{tarifa.tipoDePago}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Table hover responsive >
                            <thead>
                                <tr className="text-center">
                                    <th >Tarifa</th>
                                    <th>Porcentaje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listadoDeTarifas.map(tarifa =>
                                    <ListaTarifas key={tarifa.tipoDePago} tarifaActual={tarifa} alternarMostrar={alternarMostrar}></ListaTarifas>
                                )}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>}
        </>
    )
})
