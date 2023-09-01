import React, { useContext } from "react"
import { Button, Modal  } from "react-bootstrap"
import {  listaUsuariosContext } from "../../context/Contextos"
import { ListaDeUsuarios } from "./ListaDeUsuarios"








export const ContenedorDeUsuarios = ({ mostrar, alternarMostrar }) => {

    const { usuarioActual } = useContext(listaUsuariosContext)

    return (
        <>
            <Modal show={mostrar}   onHide={alternarMostrar}>
                <Modal.Header closeButton >
                    <Modal.Title className="d-flex">
                        <p className="mx-2">{usuarioActual.nombre}</p>
                        <p>{usuarioActual.apellido}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListaDeUsuarios cerrarTodo={alternarMostrar} />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-danger"
                        className="fs-5 fw-bolder"
                        onClick={alternarMostrar}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
