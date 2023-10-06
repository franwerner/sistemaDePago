import { useForm } from "@/hooks/useForm"
import { Button, Form, FormControl, Modal } from "react-bootstrap"
import { useValidarUsuarioSeleccionado } from "@/hooks/useValidarUsuarioSeleccionado"
import React, { useCallback } from "react"


const ModalUsuario = React.memo(({ validarUsuario, mostrar, alternarMostrar, usuario }) => {

    const { onSubmit, changeForm, form } = useForm({ "contraseña": "" })

    const { contraseña } = form


    const onClick = () => {

        validarUsuario(contraseña)
    }


    return (

        <Modal show={mostrar} onHide={alternarMostrar} >
            <Modal.Header   >

                <Modal.Title style={{ color: "#555555" }} className="fs-2 text-u" >
                    {usuario}
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
                    onClick={onClick}>
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
    )


})

export const ContenedorUsuarioSeleccionado = ({ cerrarTodo, mostrar, usuarioSeleccionado, alternarMostrar }) => {

    const { nombre } = usuarioSeleccionado

    const validar = useValidarUsuarioSeleccionado()

    const validarUsuario = useCallback((contraseña) => {

        (async () => {
            const esValido = await validar({ contraseña, "usuario": nombre })

            esValido && cerrarTodo()
        })()

    }, [])

    return (
        <ModalUsuario
            usuario={nombre}
            validarUsuario={validarUsuario}
            mostrar={mostrar}
            alternarMostrar={alternarMostrar}
        />
    )
}