import FormularioLoginEmpleado from "@/containers//PageLogin/FormularioLoginEmpleado";
import { useCallback, useState } from "react";
import { Container, Row } from "react-bootstrap";
import styles from "@/styles/PosLogin.module.css"
import { ButtonIngresar } from "./ButtonIngresar";


const usuariosDataBase = [
    {
        id: 1,
        nombre: "Franco",
        apellido: "Werner",
        password: "carlos15",
        foto: "https://img.freepik.com/foto-gratis/primer-plano-hombre-negocios-serio-camisa-blanca-mirando-camara-pie-confiado_1258-26762.jpg"
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


export const LoginContainer = () => {

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuariosDataBase[0])

    const alternarUsuario = useCallback((id) => {

        const find = usuariosDataBase.find(item => item.id == id)
        setUsuarioSeleccionado(find)

    }, [])

    return (


        <Container fluid className="h-100  d-flex justify-content-center align-items-center flex-column ">

            <Row className={`${styles.userPhotoContainer} position-absolute`}>
                <div className=" bg-white d-flex justify-content-center align-items-center overflow-hidden rounded-circle">
                    <img
                        height={140}
                        width={140}
                        srcSet={usuarioSeleccionado.foto}
                        loading="lazy"
                        decoding="async"
                        src={usuarioSeleccionado.foto} />
                </div>
            </Row>

            <Row className="h-25 mt-5 ">
                <FormularioLoginEmpleado alternarUsuario={alternarUsuario} />
            </Row>

            <Row className="d-flex h-25 w-100  align-items-end  mt-3 justify-content-center ">
                <ButtonIngresar />
            </Row>

        </Container>
    )

};