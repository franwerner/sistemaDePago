import { useContext, useState } from "react"
import { listaUsuariosContext } from "../../context/Contextos"
import { useEventoMostrar } from "../../hooks/useEventoMostrar"
import { Table } from "react-bootstrap"
import { ContenedorUsuarioSeleccionado } from "./ContenedorUsuarioSeleccionado"


export const ListaDeUsuarios = ({ cerrarTodo }) => {

    console.log("MODALITO")
    const { listaDeUsuarios } = useContext(listaUsuariosContext)

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState("")

    const seleccionarUsuario = (usuario) => {
        setUsuarioSeleccionado(usuario)
    }

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


                    <ContenedorUsuarioSeleccionado
                        cerrarTodo={cerrarTodo}
                        mostrar={mostrar}
                        usuarioSeleccionado={usuarioSeleccionado}
                        alternarMostrar={alternarMostrar}
                    />

                </tbody>
            </Table>

        </>
    )
}