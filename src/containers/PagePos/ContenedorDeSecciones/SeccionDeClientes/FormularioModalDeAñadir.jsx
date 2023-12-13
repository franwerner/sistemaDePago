import { useForm } from "@/hooks//useForm";
import { useValidarForm } from "@/hooks//useValidarForm";
import { memo, useState } from "react";
import { Button, Col, Form, Modal, Row, Spinner, Stack } from "react-bootstrap";

const NombreApellido = memo(({ changeForm, nombre, apellido, nombreValidacion, apellidoValidacion, validado }) => (

    <Row className="m-0">
        <Form.Group className="px-1 p-0" as={Col}>
            <Form.Control
                isInvalid={!nombreValidacion && validado}
                isValid={nombreValidacion && validado}
                type="text"
                onChange={changeForm}
                value={nombre}
                required
                name="nombre"
                autoComplete="off"
                placeholder="Nombre"
                aria-label="Nombre"
            />
        </Form.Group>
        <Form.Group className="p-0 px-1" as={Col}>
            <Form.Control
                isInvalid={!apellidoValidacion && validado}
                isValid={apellidoValidacion && validado}
                type="text"
                name="apellido"
                autoComplete="off"
                onChange={changeForm}
                value={apellido}
                required
                placeholder="Apellido"
                aria-label="Apellido"
            />
        </Form.Group>
    </Row>
))

const Dni = memo(({ dni, changeForm, dniValidacion, validado }) => {
    return (
        <Row className="m-0">
            <Form.Control
                type="number"
                className="my-1"
                isInvalid={!dniValidacion && validado}
                isValid={dniValidacion && validado}
                name="dni"
                required
                maxLength="9"
                minLength="8"
                autoComplete="off"
                onChange={changeForm}
                value={dni}
                placeholder="Dni"
                aria-label="Indentificacion"
            />
        </Row>
    )
})

const Telefono = memo(({ changeForm, telefono, telefonoValidado, validado }) => (
    <Row className="m-0">
        <Form.Control
            className="my-1"
            type="number"
            name="telefono"
            autoComplete="off"
            isInvalid={!telefonoValidado && validado}
            isValid={telefonoValidado && validado}
            min={9}
            required
            onChange={changeForm}
            value={telefono}
            placeholder="Telefono"
            aria-label="Telefono"
        />
    </Row>
))

const Email = memo(({ changeForm, email, validado, emailValidado }) => (
    <Row className="m-0">
        <Form.Control
            type="email"
            required
            isInvalid={!emailValidado && validado}
            isValid={emailValidado && validado}
            className="my-1"
            autoComplete="off"
            name="email"
            onChange={changeForm}
            value={email}
            placeholder="Correo"
            aria-label="correo"
        />
    </Row>
))

const Sexo = memo(({ changeForm }) => (
    <Row className="m-0">
        <Form.Group className="d-flex align-items-center p-0 flex-column" as={Col}>
            <Form.Check
                onChange={changeForm}
                name="sexo"
                required
                checked
                value="masculino"
                type="radio" />
            <i
                className="fa-solid fs-1 text-ligthdark fa-person"></i>
            <small>Masculino</small>
        </Form.Group>
        <Form.Group as={Col} className="d-flex p-0 align-items-center flex-column">
            <Form.Check
                onChange={changeForm}
                value="femenino"
                name="sexo"
                required
                type="radio" />
            <i className="fa-solid fs-1 text-ligthdark fa-person-dress"></i>
            <small>Femenino</small>
        </Form.Group>

    </Row>

))

const ButonForm = memo(({ validaciones }) => {

    const verificar = Object.values(validaciones).every(item => item)//Verifica que todas las validaciones se envien

    const [spinner, setSpinner] = useState(false)

    return <Button
        onClick={() => setSpinner(!spinner)}
        type="submit"
        variant="outline-primary-2"
        className="w-100 fw-semibold d-flex justify-content-center  ls-4 fs-5"
    >
        {
            spinner && <Spinner
                animation="border"
                className="mx-2" />
        }
        Enviar formulario
    </Button>
}

)


const ModalBody = () => {

    const { onHandleSubmit, validado } = useValidarForm()

    const { changeForm, form } = useForm({ nombre: "", apellido: "", dni: "", sexo: "masculino", email: "", telefono: "" })

    const { nombre, apellido, dni, sexo, email, telefono } = form

    const validaciones = {
        email: email.search("@") >= 1,
        dni: dni.length > 0,
        nombre: nombre.length > 0,
        apellido: apellido.length > 0,
        telefono: telefono.length > 0,
        sexo: ["masculino", "femenino"].includes(sexo)
    }

    return (
        <Modal.Body >
            <Form
                noValidate
                onSubmit={onHandleSubmit}>
                <Stack gap={3}>

                    <NombreApellido
                        validado={validado}
                        nombreValidacion={validaciones.nombre}
                        apellidoValidacion={validaciones.apellido}
                        changeForm={changeForm}
                        nombre={nombre}
                        apellido={apellido} />

                    <Dni
                        dni={dni}
                        validado={validado}
                        dniValidacion={validaciones.dni}
                        changeForm={changeForm} />

                    <Telefono
                        changeForm={changeForm}
                        telefono={telefono}
                        telefonoValidado={validaciones.telefono}
                        validado={validado}
                    />

                    <Email
                        validado={validado}
                        email={email}
                        emailValidado={validaciones.email}
                        changeForm={changeForm} />

                    <Sexo changeForm={changeForm} />

                    <ButonForm validaciones={validaciones} />

                </Stack>
            </Form>
        </Modal.Body>
    )
}

const FormularioModalDeAñadir = ({ mostrar, alternarMostrar }) => {

    return (
        <Modal
            className="shadow "
            centered
            show={mostrar}
            onHide={alternarMostrar}>
            <Modal.Header
                className="border-0"
                closeButton>
                <Modal.Title className="text-center w-100 text-ligthdark ls-4 text-uppercase border-bottom">
                    Ingresa los datos
                </Modal.Title>
            </Modal.Header>
            <ModalBody />
        </Modal>
    );
};

export default FormularioModalDeAñadir











