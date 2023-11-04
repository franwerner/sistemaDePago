import { Col, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { useEventoMostrar } from "../../hooks/useEventoMostrar";
import { EyeInput } from "../../components/EyeInput";
import React, { useEffect } from "react";
import { useFocusMouseElements } from "@/hooks//useFocusMouseElements";


const usuariosDataBase = [
    {
        id: 1,
        nombre: "Franco",
        apellido: "Werner",
        password: "carlos15",
        foto: "https://instagram.fros2-1.fna.fbcdn.net/v/t51.2885-15/121113930_186152223106898_1227588997952069190_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45Nzl4MTIyNC5zZHIifQ&_nc_ht=instagram.fros2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uBIzTtt8zBQAX9g8V3Y&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjQxNjU2ODA0NzkyMzgwNTE1OA%3D%3D.2-ccb7-5&oh=00_AfAkbSnxfef_TDSHY8-Um2oISOZ2DUp_ef0ZMfPC4x0row&oe=6539CC74&_nc_sid=ee9879"
    },
    {
        id: 2,
        nombre: "Camila",
        apellido: "Werner",
        password: "carlos15",
        foto: "https://img.freepik.com/fotos-premium/retrato-hombre-negocios-rostro-trabajador-oficina-listo-trabajar-sonrisa-feliz-empleado-trabajo-londres-empresa-diseno-tecnologia-creativa-sintiendose-tranquilo-lugar-trabajo-felicidad-laboral_590464-135564.jpg"
    },
    {
        id: 3,
        nombre: "Joel",
        apellido: "Werner",
        password: "carlos15",
        foto: "https://png.pngtree.com/thumb_back/fw800/background/20221129/pngtree-closeup-portrait-of-fashionable-men-wearing-suits-on-a-blue-background-photo-image_34648132.jpg"
    }
]


const FormSelect = React.memo(({ changeForm }) => {

    return (
        <Col className="my-2">
            <FloatingLabel
                controlId="floatingSelect"
                label="Selecciona un usuario"
            >
                <Form.Select onChange={changeForm} name="empleado" style={{ boxShadow: "none" }} >
                    {
                        usuariosDataBase.map(({ nombre, id, apellido }) =>
                            <option key={id} value={id}>{`${nombre} ${apellido}`}</option>
                        )
                    }
                </Form.Select>
            </FloatingLabel>
        </Col>
    )
})

const FormularioLoginEmpleado = React.memo(({ alternarUsuario }) => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { form, changeForm, onSubmit } = useForm({ password: "", empleado: "" })

    const { refFocusElement, onMouseEnter, onMouseLeave } = useFocusMouseElements()

    useEffect(() => {

        if (form.empleado.length == 0) return

        alternarUsuario(form.empleado)

    }, [form.empleado])

    return (
        <>

            <FormSelect changeForm={changeForm} />

            <Col xs={12} >

                <Form
                    onSubmit={onSubmit}
                    className="position-relative">

                    <FloatingLabel controlId="floatingPassword"
                        label="Contraseña">
                        <Form.Control
                            ref={refFocusElement}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            style={{ boxShadow: "none" }}
                            onChange={changeForm}
                            value={form.password}
                            name="password"
                            type={mostrar ? "text" : "password"}
                            placeholder=""
                            className="fs-5"
                            maxLength={6}
                        />
                    </FloatingLabel>

                    <EyeInput
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar} />

                </Form>

                <div className="text-end mt-1">
                    <small>Contraseña incorrecta</small>
                </div>

            </Col>
        </>
    );
})


export default FormularioLoginEmpleado