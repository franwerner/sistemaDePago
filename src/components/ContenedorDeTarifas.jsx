import React, { useContext } from "react"
import { TarifaContex } from "../context/Contextos"
import { Modal, Table } from "react-bootstrap"
import { compararTarifaActual } from "../helper/compararTarifaActual"



const ListaDeTarifas = React.memo(({ alternarMostrar, tarifa, cambiarTarifa, tarifaActual }) => {

    const { background, color } = compararTarifaActual(tarifa, tarifaActual)

    const onClick = () => {
        cambiarTarifa(tarifa)
        alternarMostrar()
    }

    return (
        <>
            <tr
                onClick={onClick}
                className="text-center"
            >
                <td style={{
                    background,
                    color
                }} >
                    {tarifa.tipoDePago}
                </td>
                <td style={{
                    background,
                    color
                }}>
                    {tarifa.porcentaje}%
                </td>
            </tr>

        </>
    )
})


export const ContenedorDeTarifas = React.memo(({ mostrar, alternarMostrar }) => {

    const { tarifaActual, listadoDeTarifas, cambiarTarifa } = useContext(TarifaContex)


    return (
        <>
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
                                    <ListaDeTarifas key={tarifa.tipoDePago}
                                        cambiarTarifa={cambiarTarifa}
                                        tarifa={tarifa}
                                        tarifaActual={tarifaActual}
                                        alternarMostrar={alternarMostrar}
                                    ></ListaDeTarifas>
                                )}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
        </>
    )
})
