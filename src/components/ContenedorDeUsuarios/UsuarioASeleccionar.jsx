import { useForm } from "../../hooks/useForm"
import { Button, Form, FormControl, Modal } from "react-bootstrap"
import { useValidarUsuarioSeleccionado } from "../../hooks/useValidarUsuarioSeleccionado"


export const UsuarioASeleccionar = ({ cerrarTodo, mostrar, usuarioSeleccionado, alternarMostrar }) => {

    const { onSubmit, changeForm, form } = useForm({ "contraseña": "" })

    const { contraseña } = form

    const data = {
        "usuario": usuarioSeleccionado.nombre,
        contraseña
    }

    const { validar } = useValidarUsuarioSeleccionado()


    const onClick = () => {

        const esValido = validar(usuarioSeleccionado, data)
        esValido.message == "validado" && cerrarTodo()
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
        </>
    )
}