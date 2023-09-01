import React, { useContext, useState } from "react"
import { Button, Form, FormControl, Modal, Table } from "react-bootstrap"
import { customErrorContext, listaUsuariosContext } from "../context/Contextos"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import { useForm } from "../hooks/useForm"
import { CustomError } from "../helper/customError"
import { buscarCodigosDeErrores } from "../helper/codigoDeErrores"
import { validarUsuarioFetch } from "../helper/endpoints/validarUsuarioFetch"


const CambiarUsuarioActual = ({ cerrarTodo, mostrar, usuarioSeleccionado, alternarMostrar }) => {



    const { onSubmit, changeForm, form } = useForm({ "contraseña": "" })

    const { cambiarUsuario } = useContext(listaUsuariosContext)

    const { generarError } = useContext(customErrorContext)

    const { contraseña } = form

    const data = {
        "usuario": usuarioSeleccionado.nombre,
        contraseña
    }

    const onClickValidacionUsuario = async () => {

        try {

            const { response } = await validarUsuarioFetch(data)

            buscarCodigosDeErrores(response)

            cambiarUsuario(usuarioSeleccionado)

            cerrarTodo()

        } catch (error) {

            if (error instanceof CustomError) {

                generarError({ ...error })

            } else {
                console.log(error)
            }

        }

    }


    return (
        <>
            <Modal show={mostrar} onHide={alternarMostrar} >
                <Modal.Header   >
                    <Modal.Title style={{ color: "#555555" }} className="fs-2 text-u" >
                        {usuarioSeleccionado.nombre}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <FormControl
                            className="fs-2 text-secondary text-center"
                            type="password"
                            value={contraseña}
                            maxLength={8}
                            name="contraseña"
                            onChange={changeForm}
                            placeholder="Ingrese la contraseña"
                            autoComplete="mew-password"
                        >

                        </FormControl>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-primary"
                        className="fs-5 fw-bolder"
                        onClick={onClickValidacionUsuario}>
                        Cambiar
                    </Button>
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


const Usuarios = React.memo(({ cerrarTodo }) => {

    const { listaDeUsuarios } = useContext(listaUsuariosContext)

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState("")

    const seleccionarUsuario = (usuario) => {
        setUsuarioSeleccionado(usuario)
    }

    console.log("asdsd")

    return (
        <>
            <Table striped hover responsive >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {listaDeUsuarios.map(usuario =>

                        <tr key={usuario.nombre}
                            onClick={() => {
                                seleccionarUsuario(usuario),
                                    alternarMostrar()
                            }}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.rol}</td>
                        </tr>

                    )}

                   
                        <CambiarUsuarioActual
                            cerrarTodo={cerrarTodo}
                            mostrar={mostrar}
                            usuarioSeleccionado={usuarioSeleccionado}
                            alternarMostrar={alternarMostrar}
                        />
                 
                </tbody>
            </Table>

        </>
    )
})



export const ListaUsuarios = ({ mostrar, alternarMostrar }) => {

    const { usuarioActual } = useContext(listaUsuariosContext)


    return (
        <>
            <Modal show={mostrar} onHide={alternarMostrar}>
                <Modal.Header closeButton >
                    <Modal.Title className="d-flex">
                        <p className="mx-2">{usuarioActual.nombre}</p>
                        <p>{usuarioActual.apellido}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Usuarios cerrarTodo={alternarMostrar} />
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