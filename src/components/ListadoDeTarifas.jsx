import React, { useContext } from "react"
import { TarifaContex } from "@/context/Contextos"
import { Modal, Table } from "react-bootstrap"
import { compararDatoSeleccionado } from "@/helper/compararDatoSeleccionado"



const Tarifas = ({ alternarMostrar, tarifa, cambiarTarifa, tarifaActual }) => {

    const { background, color } = compararDatoSeleccionado(tarifa.id, tarifaActual.id)

    const onClick = () => {
        cambiarTarifa(tarifa)
        alternarMostrar()
    }

    return (
            <tr
                onClick={onClick}
                className="text-center"
            >
                <td style={{
                    background,
                    color
                }} >
                    {tarifa.tipoDeTarifa}
                </td>
                <td style={{
                    background,
                    color
                }}>
                    {tarifa.porcentaje}%
                </td>
            </tr>
    )
}

const TablaDeTarifas = ({alternarMostrar}) => {

    const { tarifaActual, listadoDeTarifas, cambiarTarifa } = useContext(TarifaContex)

    return (
        <Table
            hover
            responsive >
            <thead>
                <tr className="text-center">
                    <th >Tarifa</th>
                    <th>Porcentaje</th>
                </tr>
            </thead>
            <tbody>
                {listadoDeTarifas.map(tarifa =>
                    <Tarifas
                        key={tarifa.id}
                        cambiarTarifa={cambiarTarifa}
                        tarifa={tarifa}
                        tarifaActual={tarifaActual}
                        alternarMostrar={alternarMostrar}
                    ></Tarifas>
                )}
            </tbody>
        </Table>
    )

}


export const ListadoDeTarifas = ({ mostrar, alternarMostrar }) => {

    const { tarifaActual } = useContext(TarifaContex)

    return (
        <Modal
            show={mostrar}
            onHide={alternarMostrar}>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "#555555" }} className="fw-bolder overflow-hidden">{tarifaActual.tipoDeTarifa}</Modal.Title>
            </Modal.Header>
            <Modal.Body  >
                <TablaDeTarifas alternarMostrar = {alternarMostrar}/>
            </Modal.Body>
        </Modal>
    )
}
