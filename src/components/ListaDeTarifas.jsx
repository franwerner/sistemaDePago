import React, { useContext } from "react"
import { TarifaContex } from "../context/Contextos"
import { Modal, Table } from "react-bootstrap"

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
                    {tarifaActual.porcentaje}%
                </td>
            </tr>

        </>
    )
})


export const ListaDeTarifas = React.memo(({ mostrar, alternarMostrar }) => {

    const { tarifaActual, listadoDeTarifas } = useContext(TarifaContex)

    return (
        <>

            {mostrar &&
                <Modal show={mostrar} onHide={alternarMostrar}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: "#555555" }} className="fw-bolder">{tarifaActual.tipoDePago}</Modal.Title>
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
                                    <ListaTarifas key={tarifa.tipoDePago} tarifaActual={tarifaActual} alternarMostrar={alternarMostrar}></ListaTarifas>
                                )}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>}
        </>
    )
})
