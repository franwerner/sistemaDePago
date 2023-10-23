import React, { useContext } from "react"
import { Modal } from "react-bootstrap"
import { listaUsuariosContext } from "@/context/Contextos"
import { ListaDeUsuarios } from "./ListaDeUsuarios"


const ContenedorDeUsuarios = ({ mostrar, alternarMostrar }) => {

    const { usuarioActual } = useContext(listaUsuariosContext)


    return (
            <Modal
                show={mostrar}
                onHide={alternarMostrar}>

                <Modal.Header closeButton>

                    <Modal.Title
                        style={{ color: "#555" }}
                        className="d-flex fw-bolder align-items-center overflow-hidden">

                        <p className="mx-2 my-0 ">{usuarioActual.nombre}</p>
                        <p className="my-0">{usuarioActual.apellido}</p>

                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <ListaDeUsuarios cerrarTodo={alternarMostrar} />
                </Modal.Body>

            </Modal>
    )
}

export default ContenedorDeUsuarios