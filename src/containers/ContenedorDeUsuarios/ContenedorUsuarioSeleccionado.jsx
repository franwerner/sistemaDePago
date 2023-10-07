import { useForm } from "@/hooks/useForm"
import { Button, Form, FormControl, Modal } from "react-bootstrap"
import { useValidarUsuarioSeleccionado } from "@/hooks/useValidarUsuarioSeleccionado"


export const ContenedorUsuarioSeleccionado = ({ cerrarTodo, mostrar, usuarioSeleccionado, alternarMostrar }) => {


    const { onSubmit, changeForm, form } = useForm({ "contraseña": "" })

    const { contraseña } = form

    const data = {
        "usuario": usuarioSeleccionado.nombre,
        contraseña
    }

    const validar = useValidarUsuarioSeleccionado()


    const onClick = async () => {

        const esValido = await validar(data)

        esValido == "Validado" && cerrarTodo()
    }




    return (
        <>

            <Modal
                show={mostrar}
                onHide={alternarMostrar}
                backdrop={false}  >
                <Modal.Header closeButton  >

                    <Modal.Title style={{ color: "#555555" }} className="fs-2 text-u" >
                        {usuarioSeleccionado.nombre}
                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={onSubmit}>

                        <FormControl
                            className="fs-4 text-secondary text-center"
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
                        variant="outline-success"
                        className="fw-bolder"
                        onClick={onClick}>
                        Cambiar
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}